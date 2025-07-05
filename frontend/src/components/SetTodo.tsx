import { useUpdateTodoMutation } from '@/app/api/todos.api';
import { setVisible } from '@/app/slice/todo.slice';
import type { AppDispatch, RootState } from '@/app/state';
import { useDispatch, useSelector } from 'react-redux';

const SetTodo = ({refetch}:{refetch: () => void}) => {
  const [updateTodo] = useUpdateTodoMutation();
  const dispatch = useDispatch<AppDispatch>();
  const { _id, title } = useSelector((state: RootState) => state.TodoReducer);
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
      <form className='bg-white p-5 rounded-lg w-[500px] h-[300px] flex flex-col gap-4'>
        <legend className=' text-center text-3xl uppercase font-semibold'>
          New note
        </legend>
        <input
          type='text'
          placeholder='Input your note...'
          defaultValue={title}
          onChange={(e) => {
            e.preventDefault();
            dispatch(
              setVisible({
                title: e.target.value,
                visible: true,
                _id: String(_id),
              })
            );
          }}
          className='border-2 border-primary px-3 py-2 rounded-lg text-xl focus:ring-3 focus:ring-primary/50 outline-none'
        />
        <div className='flex items-center justify-between mt-auto'>
          <button
            className='border-1 border-primary text-xl rounded-md bg-white text-primary font-semibold px-4 py-1.5'
            onClick={(e) => {
              e.preventDefault();
              dispatch(setVisible({ visible: false }));
            }}
          >
            Cancel
          </button>
          <button
            className='border-1 border-primary text-xl rounded-md bg-primary text-white font-semibold px-4 py-1.5'
            onClick={(e) => {
              e.preventDefault();
              updateTodo({ id: String(_id), title: title });
              dispatch(setVisible({ visible: false }));
              refetch();
            }}
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetTodo;
