import { baseApis } from './baseApis'

const termsAndConditionApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    getPrivacyPolicy: builder.query({
      query: () => {
        return {
          url: '/manage/get-terms-conditions',
          method: 'GET',
        }
      },
      providesTags: ['privacyPolicy'],
    }),
    createPrivacyPolicy: builder.mutation({
      query: (data) => {
        return {
          url: '/manage/add-terms-conditions',
          method: 'POST',
          body: data,
        }
      },
      invalidatesTags: ['privacyPolicy'],
    }),
  }),
})

export const { useGetPrivacyPolicyQuery, useCreatePrivacyPolicyMutation } =
  termsAndConditionApis

export default termsAndConditionApis
