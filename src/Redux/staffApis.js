import { baseApis } from './baseApis'

const staffApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    getAllStaff: builder.query({
      query: () => ({
        url: '/staff/all-staff',
        method: 'GET',
      }),
    }),
    // createStaff: builder.mutation({
    //   query: (data) => ({
    //     url: '/staff/create',
    //     method: 'POST',
    //     body: data,
    //   }),
    // }),
    // updateStaff: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/staff/update/${id}`,
    //     method: 'PATCH',
    //     body: data,
    //   }),
    // }),
    // deleteStaff: builder.mutation({
    //   query: (id) => ({
    //     url: `/api/staff/delete/${id}`,
    //     method: 'DELETE',
    //   }),
    // }),
    // getMyStaff: builder.query({
    //   query: () => ({
    //     url: '/staff/my-staff',
    //     method: 'GET',
    //   }),
    // }),
    // getAvailableStaff: builder.query({
    //   query: () => ({
    //     url: '/api/staff/get-available-staff',
    //     method: 'GET',
    //   }),
    // }),
    // getSingleStaff: builder.query({
    //   query: (id) => ({
    //     url: `/staff/single-staff/${id}`,
    //     method: 'GET',
    //   }),
    // }),
  }),
})

export const {
  useGetAllStaffQuery,
  // useCreateStaffMutation,
  // useUpdateStaffMutation,
  // useDeleteStaffMutation,
  // useGetMyStaffQuery,
  // useGetAvailableStaffQuery,
  // useGetSingleStaffQuery,
} = staffApis
