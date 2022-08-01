import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../slice/taskSlice'
export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
