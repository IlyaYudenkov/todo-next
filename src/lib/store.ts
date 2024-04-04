import { translateAPI } from '@/shared/lib/TranslateText/api/TranslateApi'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TranslateReducer } from './store/features/translate/translateSlice'



const rootReducer = combineReducers({
  translate: TranslateReducer,
  [translateAPI.reducerPath]: translateAPI.reducer,

})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }).concat(
        translateAPI.middleware
      )
  }
  )
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']