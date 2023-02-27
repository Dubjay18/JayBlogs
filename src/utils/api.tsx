import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export interface IArticles {
  title: string;
  description: string;
  content: string;
  url?: string;
  source?: {
    name?: string;
    url?: string;
  };
  region?: string;
  image: string;
}
export interface IData {
  articles: IArticles[];
  totalArticles: number;
}
const apiKeyQuery: string =
  "apikey=a93f06b455862d57b2fe52785a101697";
export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gnews.io/api/v4",
  }),

  endpoints: (builder) => ({
    articles: builder.query<IData, void>({
      query: () =>
        `/top-headlines?category=general&lang=en&max=50&${apiKeyQuery}`,
    }),
    search: builder.query<IData, void>({
      query: (q) =>
        `/search?q=${q}&lang=en&max=50&${apiKeyQuery}`,
    }),
  }),
});

export const { useArticlesQuery, useSearchQuery } =
  articlesApi;
