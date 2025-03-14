import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { ITodoList } from "./components/TodoList/type";
import TodoContext from "./context/TodoContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [todos, setTodos] = useState<ITodoList[]>([]);

  const addTodo = (todo: ITodoList) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: string) => {
    const res = todos.filter((todo) => todo.id != id);
    setTodos(res);
  };

  const editTodo = (id: string, todo: ITodoList) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  };

  const completeTodo = (id: string) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, isCompleted: !prevTodo.isCompleted } : prevTodo)));
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") as string);

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo, completeTodo }}>
      <Toaster />
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos?.map((todo: ITodoList) => {
              return <TodoList todoList={todo} />;
            })}
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
};

export default App;
