import { apiSlice } from "./base-query";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (Credentials) => ({
                url: "/login",
                method: "POST",
                body: Credentials,
            }),
        }),
        register: builder.mutation({
            query: (Credentials) => ({
                url: "/register",
                method: "POST",
                body: Credentials,
            }),
        })
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;