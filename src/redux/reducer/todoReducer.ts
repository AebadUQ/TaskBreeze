import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDoState, Todo } from "../../types";
const LOCAL_STORAGE_KEY = "todoList"; 
const loadTodoListFromLocalStorage = () => {
  const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : [];
};
const saveTodoListToLocalStorage = (todoList: any) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
};
const initialState: ToDoState = {
  todoId: "",
  todoList: loadTodoListFromLocalStorage(),
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
      saveTodoListToLocalStorage(state.todoList);
    },
    deleteToDo: (state, action: PayloadAction<string>) => {
      const todoIdToDelete = action.payload;
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== todoIdToDelete
      );
      saveTodoListToLocalStorage(state.todoList);
    },
    editTodo: (state, action: PayloadAction<Partial<Todo>>) => {
      const { id, ...newTodoData } = action.payload;
      const todoToEdit = state.todoList.find((todo) => todo.id === id);

      if (todoToEdit) {
        Object.assign(todoToEdit, newTodoData);
        saveTodoListToLocalStorage(state.todoList);
      }
    },
  },
});

export const { addToDo, deleteToDo, editTodo } = toDoSlice.actions;

export default toDoSlice.reducer;
