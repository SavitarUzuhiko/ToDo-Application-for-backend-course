import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { TodosResponse } from './todos';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    getTodos: builder.query<TodosResponse, { page?: number; searchQuery?: string ; completed?: string}>({
      query: ({ page, searchQuery, completed }) => {
        const params = new URLSearchParams();
        console.log({ page, searchQuery, completed });
        if (page) params.append('page', page.toString());
        if (searchQuery && searchQuery.trim() !== '') params.append('search', searchQuery);
        if (completed !== undefined) params.append('completed', completed);
        return `todos?${params.toString()}`;
      },
    }),
    addTodo: builder.mutation<TodosResponse, Partial<TodosResponse>>({
      query: (newTodo) => ({
        url: 'todos',
        method: 'POST',
        body: newTodo,
      }),
    }),
    updateTodo: builder.mutation<TodosResponse, { id: string; [key: string]: any }>({
      query: ({ id, ...updatedTodo }) => ({
        url: `todos/${id}`,
        method: 'PUT',
        body: updatedTodo,
      }),
    }),
    deleteTodo: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery
} = todosApi;
