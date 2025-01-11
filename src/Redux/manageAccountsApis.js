import { baseApis } from './baseApis'

const manageAccountsApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    getAllAdminInformation: builder.query({
      query: () => ({
        url: '/admin/all-admins',
        method: 'GET',
      }),
    }),
    updateAdminStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/update-admin-status/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: '/user/create-admin',
        method: 'POST',
        body: data,
      }),
    }),
    deleteAdmin: builder.mutation({
      query: (id) => ({
        url: `/admin/delete-admin/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetAllAdminInformationQuery,
  useUpdateAdminStatusMutation,
  useCreateAdminMutation,
  useDeleteAdminMutation,
} = manageAccountsApis
