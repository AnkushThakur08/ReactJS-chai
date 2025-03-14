import React, { useState, useContext } from "react";
import { ITodoListProps } from "./type";
import TodoContext from "../../context/TodoContext";
import toast from "react-hot-toast";

const TodoList: React.FC<ITodoListProps> = ({ todoList }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState<string>(todoList.todo);
  const { deleteTodo, editTodo, completeTodo } = useContext(TodoContext);

  const handleDelete = (id: string) => {
    deleteTodo(id);
  };

  const handleEdit = () => {
    editTodo(todoList.id, { ...todoList, todo: todoMsg });
    setIsTodoEditable(!isTodoEditable);
  };

  const handleComplete = () => {
    completeTodo(todoList.id);
  };

  return (
    <div
      className={`flex justify-between w-full bg-[#CBBBD5] py-4 px-2 rounded-xl text-black font-medium ${
        todoList.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <div className="ml-2 flex gap-3 items-center">
        <input type="checkbox" name="todoCheckbox" id="todo" checked={todoList.isCompleted} onChange={handleComplete} />
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${todoList.isCompleted ? "line-through" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>
      <div className="flex gap-4">
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 cursor-pointer"
          onClick={() => {
            if (todoList.isCompleted) {
              toast.error("Todo is already completed  ");
            }

            if (isTodoEditable) {
              handleEdit();
            } else setIsTodoEditable((prev) => !prev);
          }}
        >
          {`${isTodoEditable ? "📁" : "✏️"}`}
        </button>

        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 cursor-pointer"
          onClick={() => handleDelete(todoList.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default TodoList;
