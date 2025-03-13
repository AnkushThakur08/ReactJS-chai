import { createContext } from "react";
import { ITodoList } from "../components/TodoList/type";

const TodoContext = createContext({
  todos: [
    {
      todo: "A Simple Todo",
      id: "1",
      isCompleted: false,
    },
  ],
  addTodo: (todo: ITodoList) => {},
  editTodo: (id: string, todo: ITodoList) => {},
  deleteTodo: (id: string) => {},
  completeTodo: (id: string) => {},
});

export default TodoContext;
