import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Slogan } from './types/Slogan';

export const sloganApi = createApi({
  reducerPath: 'sloganApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/slogan' }),
  tagTypes: ['slogan'],
  endpoints: (builder) => ({
    getSlogan: builder.query<Slogan, void>({
      query: () => ``
    }),
    getSlogansByCategory: builder.query<Slogan[], string>({
      query: (id) => `/${id}`,
      providesTags: ['slogan']
    }),
    addSlogan: builder.mutation<Slogan, Slogan>({
      query: (slogan) => ({
        url: ``,
        method: 'POST',
        body: slogan
      }),
      invalidatesTags: ['slogan']
    }),
    updateSlogan: builder.mutation<Slogan, Slogan>({
      query: (slogan) => ({
        url: ``,
        method: 'PUT',
        body: slogan
      }),
      invalidatesTags: ['slogan']
    }),
    deleteSlogan: builder.mutation<Slogan, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['slogan']
    })
  })
});

export const {
  useGetSloganQuery,
  useAddSloganMutation,
  useDeleteSloganMutation,
  useUpdateSloganMutation,
  useGetSlogansByCategoryQuery
} = sloganApi;
