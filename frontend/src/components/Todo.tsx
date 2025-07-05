import { Checkbox } from './ui/checkbox'
import { Pen, PenHover, Trash, TrashHover } from '../assets'
import { useUpdateTodoMutation, useDeleteTodoMutation } from '@/app/api/todos.api'
import type { TodoType } from '@/app/api/todos'
import { useDispatch} from 'react-redux'
import type { AppDispatch} from '@/app/state'
import { setVisible } from '@/app/slice/todo.slice'

interface TodoProps {
  refetch: () => void;
  todo : TodoType
}

const Todo = ({todo , refetch}:TodoProps) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className='flex items-center justify-between mx-15 py-5 not-last:border-b-2'>
      <div className='flex items-center gap-6'>
        <Checkbox
          checked={!!todo.completed}
          className='scale-150 border-2 border-primary ring-primary '
          onCheckedChange={(checked) => {
            updateTodo({ id: String(todo._id), completed: !!checked });
            refetch();
          }}
        />
        <p className={`text-xl uppercase font-semibold dark:text-white ${todo.completed ? "line-through" : ""}`}>{todo.title}</p>
      </div>
      <div className='flex gap-4 items-center'>
        <img src={Pen} onMouseOver={(e) => (e.currentTarget.src = PenHover)}
          onMouseOut={(e) => (e.currentTarget.src = Pen)}
          onClick={() => dispatch(setVisible({visible:true, _id: String(todo._id), title: todo.title, completed: todo.completed}))}
          className='scale-150' alt="Edit Task" />
        <img 
          src={Trash} 
          onMouseOver={(e) => (e.currentTarget.src = TrashHover)}
          onMouseOut={(e) => (e.currentTarget.src = Trash)}
          onClick={async() => {
            await deleteTodo(String(todo._id));
            refetch();
          }}
          className='scale-150' 
          alt="Delete Task" 
        />
      </div>
    </div>
  )
}

export default Todo

