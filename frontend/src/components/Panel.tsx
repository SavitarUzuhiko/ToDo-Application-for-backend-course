import React from 'react';
import DarkSearch from '../assets/Dark Search.png';
import Search from '../assets/search.svg';
import { Toggle } from '@/components/ui/toggle';
import { Moon, Sun } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setCompleted, setQuery } from '@/app/slice/todo.slice';

interface Props {
  theme: '' | 'dark';
  setTheme: (theme: '' | 'dark') => void;
  refetch: () => void;
}

const Panel = ({ theme, setTheme, refetch }: Props) => {
  const searchInput = React.useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const [inputFocused, setInputFocused] = React.useState(false);

  const handleSearch = () => {
    if (searchInput.current) {
      const query = searchInput.current.value;
      dispatch(setQuery(query));
      console.log('Searching for:', query);
    }
  };

  return (
    <div className='flex justify-center items-center mt-5 gap-2'>
      <div
        className={`flex items-center flex-1 gap-2 border-2 border-primary dark:border-white py-1.5 rounded-lg px-2 dark:bg-secondary dark:text-secondary-foreground transition-shadow ${
          inputFocused
            ? 'ring-2 ring-primary dark:ring-white shadow-lg dark:border-white/80 border-primary/80'
            : ''
        }`}
        tabIndex={-1}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      >
        <input
          ref={searchInput}
          type='text'
          className='text-xl font-semibold dark:text-white text-primary flex-1 outline-none rounded bg-transparent'
          placeholder='Search note...'
          onChange={() => {if(searchInput.current?.value === '') dispatch(setQuery(''))}}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <button onClick={handleSearch}>
          {theme ? (
            <img src={DarkSearch} alt='search' className='w-6 h-6' />
          ) : (
            <img src={Search} alt='search' className='w-6 h-6' />
          )}
        </button>
      </div>
      <select
        className='border-2 border-primary rounded-lg px-2 py-1.5 text-lg text-light w-40 dark:text-secondary-foreground uppercase bg-primary focus:bg-primary/90'
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        onChange={async (e) => {
          await dispatch(setCompleted(e.target.value));
          refetch();
        }}
      >
        <option
          className='capitalize bg-light text-primary font-semibold'
          value=''
        >
          All
        </option>
        <option
          className='capitalize bg-light hover:bg-primary/90 text-primary font-semibold'
          value='true'
        >
          Completed
        </option>
        <option
          className='capitalize bg-light text-primary font-semibold'
          value='false'
        >
          Incompleted
        </option>
      </select>
      <Toggle
        className='bg-primary hover:bg-primary/80 text-secondary dark:bg-primary hover:dark:bg-primary/80 h-11 w-11 rounded-lg'
        size='default'
        onClick={() => setTheme(theme === '' ? 'dark' : '')}
        aria-label='Toggle theme'
      >
        {theme ? <Sun /> : <Moon />}
      </Toggle>
    </div>
  );
};

export default Panel;

