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
      }
      state.push(newTask)
    },
    editTask: (state, action) => {
      const { id, content } = action.payload
      const task = state.find(task => task.id === id)
      if (task) {
        task.content = content
      }
    },
    deleteTask: (state, action) => {
      state = state.filter(task => task.id !== action.payload)
    },
  },
})

export const { addTask, deleteTask, editTask } = taskSlice.actions

export default taskSlice.reducer