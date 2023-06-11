import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category } from './types/Category';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/category' }),
  tagTypes: ['category'],
  endpoints: (builder) => ({
    getCategoryById: builder.query<Category, string>({
      query: (id) => `/${id}`
    }),
    getCategories: builder.query<Category[], void>({
      query: () => ``,
      providesTags: ['category']
    }),
    addCategory: builder.mutation<Category, Category>({
      query: (category) => ({
        url: ``,
        method: 'POST',
        body: category
      }),
      invalidatesTags: ['category']
    }),
    updateCategory: builder.mutation<Category, Category>({
      query: (category) => ({
        url: ``,
        method: 'PUT',
        body: category
      }),
      invalidatesTags: ['category']
    }),
    deleteCategory: builder.mutation<Category, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['category']
    })
  })
});

export const {
  useGetCategoryByIdQuery,
  useAddCategoryMutation,
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation
} = categoryApi;
