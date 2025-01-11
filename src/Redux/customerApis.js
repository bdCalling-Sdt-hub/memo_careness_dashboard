import { baseApis } from './baseApis'

const customerApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    updateCustomer: builder.mutation({
      query: (data) => ({
        url: '/api/customer/update',
        method: 'PATCH',
        body: data,
      }),
    }),
    blockUnblockUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/user/block-unblock/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
    getAllCustomers: builder.query({
      query: () => ({
        url: '/customer/get-all',
        method: 'GET',
      }),
    }),
    completeCustomerProfile: builder.mutation({
      query: (data) => ({
        url: '/customer/complete-profile',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const {
  useUpdateCustomerMutation,
  useBlockUnblockUserMutation,
  useGetAllCustomersQuery,
  useCompleteCustomerProfileMutation,
} = customerApis
