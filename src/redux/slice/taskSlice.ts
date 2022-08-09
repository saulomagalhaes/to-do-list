import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { Task } from '../../types/task';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuid(),
        content: action.payload,
        isCompleted: false,
      }
      state.push(newTask)
      localStorage.setItem('tasks', JSON.stringify(state))
    },
    editTask: (state, action) => {
      const { id, content } = action.payload
      const task = state.find(task => task.id === id)
      if (task) {
        task.content = content
      }
      localStorage.setItem('tasks', JSON.stringify(state))
    },
    deleteTask: (state, action) => {
      const task = state.find(task => task.id === action.payload)
      if (task) {
        state.splice(state.indexOf(task), 1)
      }
      localStorage.setItem('tasks', JSON.stringify(state))
    },
    toggleTask: (state, action) => {
      const { id, checked } = action.payload
      const task = state.find(task => task.id === id)
      if (task) {
        task.isCompleted = checked;
      }
      localStorage.setItem('tasks', JSON.stringify(state))
    },
    setState: (state, action) => {
      state.unshift(...action.payload);
    }
  },
})

export const { addTask, deleteTask, editTask, toggleTask, setState } = taskSlice.actions

export default taskSlice.reducer