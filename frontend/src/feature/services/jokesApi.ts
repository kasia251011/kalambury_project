import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Joke } from './types/Joke';

export const jokesApi = createApi({
  reducerPath: 'jokesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://v2.jokeapi.dev/joke' }),
  endpoints: (builder) => ({
    getJoke: builder.query<Joke, void>({
      query: () =>
        `/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`
    })
  })
});

export const { useGetJokeQuery } = jokesApi;
