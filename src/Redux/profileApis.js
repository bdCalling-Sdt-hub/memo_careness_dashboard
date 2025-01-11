import { baseApis } from './baseApis'

const profileApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    getProfileInformation: builder.query({
      query: () => ({
        url: '/user/get-my-profile',
        method: 'GET',
      }),
    }),
    updateProfileInformation: builder.mutation({
      query: (data) => ({
        url: '/admin/update-admin-profile',
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
})

export const {
  useGetProfileInformationQuery,
  useUpdateProfileInformationMutation,
} = profileApis
