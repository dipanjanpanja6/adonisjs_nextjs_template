import { Api } from "."

const userApi = Api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<any, any>({
      query: body => ({ url: "/users/login", body, method: "POST" }),
    }),
    signup: builder.mutation<any, any>({
      query: body => ({ url: "/users", body, method: "POST" }),
      invalidatesTags: (_, error) => (error ? [] : ["users"]),
    }),
    getMyAccount: builder.query<any, void>({ query: () => "/users/me" }),
    logout: builder.mutation<any, void>({
      query: () => ({ url: "/users/logout", method: "DELETE" }),
    }),
  }),
  overrideExisting: false,
})

export const { useLoginMutation, useGetMyAccountQuery, useLogoutMutation, useSignupMutation } = userApi
export const { login, getMyAccount, logout } = userApi.endpoints
