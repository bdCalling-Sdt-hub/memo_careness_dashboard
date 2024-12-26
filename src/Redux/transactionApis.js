import { baseApis } from "./baseApis";

const transactionApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        getAllTransactions: builder.query({
            query: () => ({
                url: '/transaction/get-all-transaction',
                method: 'GET',
            }),
        }),
        getShopTransactions: builder.query({
            query: () => ({
                url: '/transaction/get-shop-transaction',
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useGetAllTransactionsQuery,
    useGetShopTransactionsQuery,
} = transactionApis;
