import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { APP_URL } from "../config/app"
// import { logout } from "./services/user"
// import qs from 'query-string';

const getBaseUrl = () => {
  const windowAvailable = () => !!(typeof window !== "undefined" && window.document && window.document.createElement)

  if (windowAvailable()) {
    // not SSR?
    console.debug("running on browser, skipping baseurl manipulation")
    return "/api"
  }
  console.log(`running on server, baseurl: ${APP_URL}/api`)

  return `${APP_URL}/api`
}

export const baseQuery = fetchBaseQuery({
  baseUrl: getBaseUrl(),
  credentials: "include",
  // paramsSerializer(params) {
  //   return qs.stringify(params, { arrayFormat: 'bracket' });
  // },
  // prepareHeaders: (headers, api) => {
  //   const ctx = api.extra as Context
  //   // helper function for detecting SSR
  //   const windowAvailable = () => !!(typeof window !== "undefined" && window.document && window.document.createElement)

  //   if (windowAvailable()) {
  //     // not SSR?
  //     console.debug("running on browser, skipping header manipulation")
  //     return headers
  //   }

  //   if ("query" in ctx && ctx.query.iframe && typeof ctx.query.token === "string") {
  //     headers.set("Authorization", `bearer ${ctx.query.token}`)
  //     console.log("App running in iframe.", ctx.query.token)
  //     return headers
  //   }

  //   // find any cookies in the request
  //   if ("req" in ctx && ctx.req && "cookies" in ctx.req && ctx.req.cookies) {
  //     // Build a cookie string from object
  //     const cookieValue = Object.entries(ctx.req.cookies)
  //       // .filter(([k]) => k === 'JSESSIONID') // only include relevant cookies
  //       .map(([k, v]) => `${k}=${v}`) // rfc6265
  //       .join("; ")
  //     headers.set("Cookie", cookieValue)
  //   }

  //   // const token = (api.getState() as RootState).auth.token
  //   // if (token) headers.set("Authorization", token)

  //   return headers
  // },
})

// export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions)

//   //@ts-ignore
//   if (result.error && result.error.status === 401) {
//     console.log(result, "logout")
//     api.dispatch(Api.endpoints.logout.initiate())
//   }
//   return result
// }
