import { configureStore } from "@reduxjs/toolkit";
import taskReducer, { hydrate } from "../slice/taskSlice";

export const store = configureStore({
  reducer: taskReducer,
});

store.subscribe(() => {
  localStorage.setItem("tasks", JSON.stringify(store.getState()));
});

const getTodosFromLocalStorage = () => {
  try {
    const persistedState = localStorage.getItem("tasks");
    if (persistedState) return JSON.parse(persistedState);
  } catch (e) {
    console.log(e);
  }
};

const todos = getTodosFromLocalStorage();
if (todos) {
  store.dispatch(hydrate(todos));
}

export type RootState = ReturnType<typeof store.getState>;
