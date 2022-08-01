import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { TaskEmpty } from "./TaskEmpty";
import { Tasks } from "./Tasks";

function ListTasks() {
  const tasks = useSelector((state: RootState) => state.task);
  if (tasks.length === 0) {
    return <TaskEmpty />;
  }
  return <Tasks />;
}

export { ListTasks };
