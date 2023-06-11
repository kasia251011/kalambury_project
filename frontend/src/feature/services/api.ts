import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category } from './types/Category';
import { Slogan } from './types/Slogan';
import { Joke } from './types/Joke';

export const api = createApi({
  reducerPath: 'appointmentApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  tagTypes: ['category', 'slogan'],
  endpoints: (builder) => ({
    getCategoryById: builder.query<Category, string>({
      query: (id) => `http://localhost:8080/category/${id}`
    }),
    getCategories: builder.query<Category[], void>({
      query: () => `http://localhost:8080/category`,
      providesTags: ['category']
    }),
    addCategory: builder.mutation<Category, Category>({
      query: (category) => ({
        url: `http://localhost:8080/category`,
        method: 'POST',
        body: category
      }),
      invalidatesTags: ['category']
    }),
    getSlogan: builder.query<Slogan, void>({
      query: () => `http://localhost:8080/slogan`
    }),
    addSlogan: builder.mutation<Slogan, Slogan>({
      query: (slogan) => ({
        url: `http://localhost:8080/slogan`,
        method: 'POST',
        body: slogan
      }),
      invalidatesTags: ['slogan']
    }),
    getJoke: builder.query<Joke, void>({
      query: () =>
        `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`
    })
  })
});

export const {
  useGetCategoryByIdQuery,
  useGetJokeQuery,
  useGetSloganQuery,
  useAddCategoryMutation,
  useAddSloganMutation,
  useGetCategoriesQuery
} = api;
