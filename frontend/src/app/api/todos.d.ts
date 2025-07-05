export type TodoType = {
  _id: number;
  title: string;
  completed: boolean;
}
export type TodosResponse = {
  todos: Todo[];
  total: number;
}