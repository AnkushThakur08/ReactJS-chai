import { Toaster } from "react-hot-toast";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import TodoList from "./components/TodoList";
import { ITodo } from "./features/todo/type";

function App() {
  const todos = useSelector((state: RootState) => state.todo);

  console.log("todos", todos);

  return (
    <>
      <Toaster />
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos?.map((todo: ITodo) => {
              return <TodoList key={todo.id} todoList={todo} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
