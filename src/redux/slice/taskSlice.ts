import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { Task } from "../../types/task";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [] as Task[],
  reducers: {
    hydrate: (state, action) => {
      return action.payload;
    },
    addTask: (state, action) => {
      const newTask = {
        id: uuid(),
        content: action.payload,
        isCompleted: false,
      };
      state.push(newTask);
    },
    editTask: (state, action) => {
      const { id, content } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.content = content;
      }
    },
    deleteTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        state.splice(state.indexOf(task), 1);
      }
    },
    toggleTask: (state, action) => {
      const { id, checked } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.isCompleted = checked;
      }
    },
  },
});

export const { addTask, deleteTask, editTask, toggleTask, hydrate } = taskSlice.actions;

export default taskSlice.reducer;
