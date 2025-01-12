import { baseApis } from './baseApis'

const categoryApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => ({
        url: '/shop-category/create',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['category'],
    }),
    updateCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/shop-category/update/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['category'],
    }),
    getMyCategories: builder.query({
      query: () => ({
        url: '/shop-category/get-all',
        method: 'GET',
      }),
      providesTags: ['category'],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/shop-category/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['category'],
    }),
  }),
})

export const {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useGetMyCategoriesQuery,
  useDeleteCategoryMutation,
} = categoryApis
