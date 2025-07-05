import React from 'react';
import { useGetTodosQuery } from './app/api/todos.api';
import Panel from './components/Panel';
import Todo from './components/Todo';
import SetTodo from './components/SetTodo';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './app/state';
import { PaginationExample } from './components/Pagination';

const App = () => {
  const [theme, setTheme] = React.useState<'' | 'dark'>('');
  const { visible, query, completed, page } = useSelector(
    (state: RootState) => state.TodoReducer
  );
  const dispatch = useDispatch();
  const { data: todos, isLoading, isError, isSuccess, refetch } =
    useGetTodosQuery({ page, searchQuery: query, completed });

  React.useEffect(() => {
    if (isSuccess) {
      dispatch({ type: 'Todo Slice/setVisible', payload: { page: todos?.page, total: todos?.total } });
    }
  }, [isSuccess, todos, dispatch]);

  return (
    <div className={`${theme} bg-background`}>
      <div
        className={`max-w-[800px]  mx-auto py-7`}
        data-theme={theme}
      >
        <h1 className='dark:text-white text-center text-3xl uppercase font-semibold'>
          Todo list
        </h1>
        <Panel theme={theme} refetch={refetch} setTheme={setTheme} />
        {isLoading && <p className='text-center'>Loading...</p>}
        {isError && <p className='text-center'>Error is </p>}

        <div className='p-5'>
          {todos?.todos.map((todo) => (
            <Todo key={todo._id} refetch={refetch} todo={todo} />
          ))}
        </div>
        {todos &&todos.total > 10  && <PaginationExample />}
        {visible ? <SetTodo refetch={refetch} /> : null}
      </div>
    </div>
  );
};

export default App;

