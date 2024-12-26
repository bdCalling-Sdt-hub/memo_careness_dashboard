import { baseApis } from "./baseApis";

const authApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
        }),
        changePassword: builder.mutation({
            query: (data) => ({
                url: '/auth/change-password',
                method: 'POST',
                body: data,
            }),
        }),
        forgetPassword: builder.mutation({
            query: (data) => ({
                url: '/auth/forget-password',
                method: 'POST',
                body: data,
            }),
        }),
        resetPassword: builder.mutation({
            query: (data) => ({
                url: '/auth/reset-password',
                method: 'POST',
                body: data,
            }),
        }),
        verifyResetOtp: builder.mutation({
            query: (data) => ({
                url: '/auth/verify-reset-otp',
                method: 'POST',
                body: data,
            }),
        }),
        resendResetCode: builder.mutation({
            query: (data) => ({
                url: '/auth/resend-reset-code',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useChangePasswordMutation,
    useForgetPasswordMutation,
    useResetPasswordMutation,
    useVerifyResetOtpMutation,
    useResendResetCodeMutation,
} = authApis;

export default authApis;
