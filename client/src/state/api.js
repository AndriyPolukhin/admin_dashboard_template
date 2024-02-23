import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
	reducerPatH: 'adminApi',
	tagTypes: ['User', 'Products'],
	endpoints: (build) => ({
		getUser: build.query({
			query: (id) => `general/user/${id}`,
			providesTags: ['User'],
		}),
		getProducts: build.query({
			query: () => `client/products`,
			providesTags: ['Products'],
		}),
	}),
})

export const { useGetUserQuery, useGetProductsQuery } = api
