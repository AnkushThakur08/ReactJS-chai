import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "./type";

const initialState: ITodo[] = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      state.push(actions.payload);
    },
    updateTodo: () => {},
    deleteTodo: (state, actions) => {
      return [...state.filter((todo) => todo.id !== actions.payload)];
    },
    completeTodo: (state, actions) => {
      return state.map((todo) =>
        todo.id === actions.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, completeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
