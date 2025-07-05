import React from 'react';
import { useGetTodosQuery, useUpdateTodoMutation } from './app/api/todos.api';
import Panel from './components/Panel';
import Todo from './components/Todo';
import SetTodo from './components/SetTodo';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './app/state';
import { PaginationExample } from './components/Pagination';
import { Plus } from 'lucide-react';
import NewTodo from './components/NewTodo';
import { setVisibility } from './app/slice/todo.slice';

const App = () => {
  const [theme, setTheme] = React.useState<'' | 'dark'>('');
  const { visible, query, completed, page , visibility} = useSelector(
    (state: RootState) => state.TodoReducer
  );
  const dispatch = useDispatch();
  const { data: todos, isLoading, isError, isSuccess, refetch } =
    useGetTodosQuery({ page, searchQuery: query, completed });

  
    const [updateTodo] = useUpdateTodoMutation();

  React.useEffect(() => {
    if (isSuccess) {
      dispatch({ type: 'Todo Slice/setVisible', payload: { page: todos?.page, total: todos?.total } });
    }
  }, [isSuccess, todos, dispatch]);

  return (
    <div className={`${theme} bg-background`}>
      <div
        className={`max-w-[800px]  mx-auto py-7 relative min-h-screen`}
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


        <span onClick={() => dispatch(setVisibility(true))} className='absolute bottom-5 right-5 bg-primary w-15 h-15 text-5xl flex items-center justify-center m-0 rounded-full'><Plus size={45} color='white' /></span>

        {visibility && <NewTodo refresh={refetch} />}

        {todos &&todos.total > 10  && <PaginationExample />}
        {visible ? <SetTodo refetch={refetch} update={updateTodo} /> : null}
      </div>
    </div>
  );
};

export default App;

