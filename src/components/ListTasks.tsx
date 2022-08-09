import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { TaskEmpty } from "./TaskEmpty";
import { Tasks } from "./Tasks";

function ListTasks() {
  const localTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const tasks = useSelector((state: RootState) => state.task);
  if (tasks.length === 0 && localTasks.length === 0) {
    return <TaskEmpty />;
  }
  return <Tasks localTasks={localTasks}  />;
}

export { ListTasks };
