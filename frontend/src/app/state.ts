import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './api/todos.api'
import TodoReducer from './slice/todo.slice'

export const store = configureStore({
  reducer: {
    TodoReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch