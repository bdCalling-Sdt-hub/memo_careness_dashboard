import { baseApis } from './baseApis'

const payOnShopApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    getAllShopData: builder.query({
      query: ({ page, limit }) => {
        return {
          url: '/client/pay-on-shop-data',
          method: 'GET',
          params: {
            page: page,
            limit: limit,
          },
        }
      },
    }),
    notifyAllShop: builder.mutation({
      query: (data) => {
        return {
          url: '/client/notify-all-shops',
          method: 'POST',
          body: data,
        }
      },
      invalidatesTags: ['payOnShop'],
    }),
    notifyOneShop: builder.mutation({
      query: (data, id) => {
        return {
          url: `/client/notify-single-shop/${id}`,
          method: 'POST',
          body: data,
        }
      },
    }),
  }),
})

export const {
  useGetAllShopDataQuery,
  useNotifyAllShopMutation,
  useNotifyOneShopMutation,
} = payOnShopApis

export default payOnShopApis
