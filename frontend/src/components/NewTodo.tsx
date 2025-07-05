import { useAddTodoMutation } from "@/app/api/todos.api";
import { setVisibility } from "@/app/slice/todo.slice";
import { useRef, type FormEvent } from "react";
import { useDispatch } from "react-redux";

interface SetTodoProps {
  refresh : () => void;
}

const NewTodo = ({refresh}: SetTodoProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [addTodo] = useAddTodoMutation();
  const dispatch = useDispatch(); 

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (inputRef.current?.value) {
      console.log("New Todo:", inputRef.current.value);
      addTodo({ title: inputRef.current.value }).unwrap()
      dispatch(setVisibility(false))
      refresh();
      inputRef.current.value = '';
    } else {
      console.error("Title cannot be empty");
    }
  }
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
      <form className='bg-white p-5 rounded-lg w-[500px] h-[300px] flex flex-col gap-4'>
        <legend className=' text-center text-3xl uppercase font-semibold'>
          New note
        </legend>
        <input
          type='text'
          ref={inputRef}
          placeholder='Input your note...'
          className='border-2 border-primary px-3 py-2 rounded-lg text-xl focus:ring-3 focus:ring-primary/50 outline-none'
        />
        <div className='flex items-center justify-between mt-auto'>
          <button
          onClick={() => dispatch(setVisibility(false))}
            className='border-1 border-primary text-xl rounded-md bg-white text-primary font-semibold px-4 py-1.5'
          >
            Cancel
          </button>
          <button
          onClick={handleSubmit}
            className='border-1 border-primary text-xl rounded-md bg-primary text-white font-semibold px-4 py-1.5'
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;

