import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../slice/taskSlice'
export default configureStore({
  reducer: {
    task: taskReducer,
  },
})