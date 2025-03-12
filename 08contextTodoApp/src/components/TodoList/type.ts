export interface ITodoList {
  id: string;
  todo: string;
  isCompleted: boolean;
}

export interface ITodoListProps {
  todoList: ITodoList;
}
