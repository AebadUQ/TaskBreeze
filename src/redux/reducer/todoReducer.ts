import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDoState, Todo } from "../../types";
const initialState: ToDoState = {
  todoId: "",
  todoList: [],
};
export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<Partial<Todo>>) => {
      const newTodo: Todo = {
        id: Math.random().toString(36).substring(7),
        ...action.payload,
      };
      state.todoList.push(newTodo);
    },
    deleteToDo: (state, action: PayloadAction<string>) => {
      const todoIdToDelete = action.payload;
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== todoIdToDelete
      );
    },
    editTodo: (state, action: PayloadAction<Partial<Todo>>) => {
      const { id, ...newTodoData } = action.payload;
      const todoToEdit = state.todoList.find((todo) => todo.id === id);

      if (todoToEdit) {
        Object.assign(todoToEdit, newTodoData);
      }
    },
  },
});

export const { addToDo, deleteToDo, editTodo } = toDoSlice.actions;

export default toDoSlice.reducer;
