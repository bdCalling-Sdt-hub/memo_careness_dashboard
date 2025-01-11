import { baseApis } from './baseApis'

const categoryApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => ({
        url: '/category/create-category',
        method: 'POST',
        body: data,
      }),
    }),
    updateCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/category/update-category/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
    getMyCategories: builder.query({
      query: () => ({
        url: '/category/my-categories',
        method: 'GET',
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/delete-category/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useGetMyCategoriesQuery,
  useDeleteCategoryMutation,
} = categoryApis
