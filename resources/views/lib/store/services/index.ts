import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../fetch-base-query'

export const Api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  tagTypes: ['users', 'logins'],
  // extractRehydrationInfo(action, { reducerPath }) {
  //   if (action.type === HYDRATE) {
  //     return action.payload[reducerPath]
  //   }
  // },
  endpoints: (builder) => ({}),
})

// Export hooks for usage in functional components
export const {
  util: { getRunningQueriesThunk },
} = Api

// export endpoints for use in SSR
export const {} = Api.endpoints
