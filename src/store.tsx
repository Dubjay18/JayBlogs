import { configureStore } from "@reduxjs/toolkit";
import { articlesApi } from "./utils/api";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware),
});
