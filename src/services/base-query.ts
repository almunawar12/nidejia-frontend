import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getSession } from 'next-auth/react';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headres) => {
        const session = await getSession();
        if (session?.user.token) {
            headres.set("Authorization", `Bearer ${session.user.token}`);
        }
        headres.set("Accept", "application/json");
        return headres;
    },
});

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({}),
})