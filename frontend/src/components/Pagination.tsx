import { useDispatch, useSelector } from 'react-redux';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination';
import type { RootState } from '@/app/state';
import { useGetTodosQuery } from '@/app/api/todos.api';

export function PaginationExample() {
  const { page, total } = useSelector((state: RootState) => state.TodoReducer);
  const { data: todos } = useGetTodosQuery({ page });
  const dispatch = useDispatch();
  if (page === undefined || total === undefined) return null;
  return (
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() =>
                dispatch({ type: 'Todo Slice/setPage', payload: page - 1 })
              }
            />
          </PaginationItem>
        )}

        {page > 1 && (
          <PaginationItem>
            <PaginationLink onClick={() =>
                dispatch({ type: 'Todo Slice/setPage', payload: page - 1 })
              }>{page - 1}</PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink isActive>{page}</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            onClick={() =>
              dispatch({ type: 'Todo Slice/setPage', payload: page + 1 })
            }
          >
            {page + 1}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            onClick={() =>
              dispatch({ type: 'Todo Slice/setPage', payload: page + 1 })
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
