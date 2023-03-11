import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export interface IArticles {
  title: string;
  description: string;
  content: string;
  url?: string;
  source?: string;
  region?: string;
  image: string;
  author?: string;
  category?: string;
  language?: string;
  country?: string;
  published_at?: string;
}
export interface IData {
  data: IArticles[];
  pagination: {
    limit?: number;
    offset?: number;
    count?: number;
    total?: number;
  };
}
export interface Iq {
  q: string | string[] | undefined;
}
const apiKeyQuery: string =
  "apikey=a93f06b455862d57b2fe52785a101697";
export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.mediastack.com/v1",
  }),

  endpoints: (builder) => ({
    articles: builder.query<IData, void>({
      query: () =>
        `/news?access_key=${process.env.MEDIASTACK_KEY}&sources=cnn,-bbc`,
    }),
    search: builder.query<IData, Iq>({
      query: (q) =>
        `/news?access_key=${process.env.MEDIASTACK_KEY}?&keywords=${q}`,
    }),
  }),
});

export const { useArticlesQuery, useSearchQuery } =
  articlesApi;
