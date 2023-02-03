import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export interface IArticles {
  title: string;
  url?: string;
  source: string;
  region?: string;
  image: string;
}

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://energy-price-news.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        `${process.env.RAPID_KEY}`
      );

      return headers;
    },
  }),

  endpoints: (builder) => ({
    articles: builder.query<IArticles[], void>({
      query: () => "/news",
    }),
  }),
});

export const { useArticlesQuery } = articlesApi;
