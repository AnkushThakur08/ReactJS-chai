import React, { useState, useContext } from "react";
import { ITodoListProps } from "./type";
import TodoContext from "../../context/TodoContext";

const TodoList: React.FC<ITodoListProps> = ({ todoList }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState<string>(todoList.todo);
  const { deleteTodo, editTodo } = useContext(TodoContext);
  console.log("todo", todoList);

  const handleDelete = (id: string) => {
    deleteTodo(id);
  };

  const handleEdit = () => {
    editTodo(todoList.id, { ...todoList, todo: todoMsg });
    setIsTodoEditable(!isTodoEditable);
  };

  return (
    <div className="flex justify-between w-full bg-[#CBBBD5] py-4 px-2 rounded-xl text-black font-medium">
      <div className="ml-2 flex gap-3 items-center">
        <input type="checkbox" name="todoCheckbox" id="todo" />
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
            if (todoList.isCompleted) return;

            if (isTodoEditable) {
              handleEdit();
            } else setIsTodoEditable((prev) => !prev);
          }}
        >
          {`${isTodoEditable ? "📁" : "✏️"}`}
        </button>

        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 cursor-pointer"
          onClick={(id) => handleDelete(todoList.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default TodoList;
