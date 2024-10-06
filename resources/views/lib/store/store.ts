import { configureStore } from "@reduxjs/toolkit"
import { Api } from "./services"

export const makeStore = () => {
  return configureStore({
    reducer: { [Api.reducerPath]: Api.reducer },
    middleware: gDM => gDM({ serializableCheck: false }).concat(Api.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
