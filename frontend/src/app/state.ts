import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './api/todos.api'
import { combineReducers } from 'redux'
import TodoReducer from './slice/todo.slice'

const rootReducer = combineReducers({
  TodoReducer,
  [todosApi.reducerPath]: todosApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
