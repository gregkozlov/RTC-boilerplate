import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    handleAdd: (state, action) => {
      state.todos.push(action.payload);
    },
    handleComplete: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      toggleTodo.completed = !toggleTodo.completed;
    },
    handleDelete: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { handleAdd, handleComplete, handleDelete } = todoSlice.actions;

export default todoSlice.reducer;
