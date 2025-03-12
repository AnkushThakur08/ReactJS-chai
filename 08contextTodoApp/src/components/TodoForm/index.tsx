import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoContext from "../../context/TodoContext";
import toast from "react-hot-toast";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = (e: React.FormEvent, input: string) => {
    e.preventDefault();
    input.length <= 1 ? toast.error("Please Enter a Todo") : addTodo({ todo: input, id: uuidv4(), isCompleted: false });
    setInput("");
  };

  return (
    <form className="flex" method="post" onSubmit={(e) => handleAddTodo(e, input)}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 cursor-pointer">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
