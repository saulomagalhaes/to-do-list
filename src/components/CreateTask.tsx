import { useState } from "react";
import { useDispatch } from "react-redux";
import CreateTaskImg from "../assets/CreateTask.svg";
import { addTask } from "../redux/slice/taskSlice";
import styles from "../styles/CreateTask.module.scss";

function CreateTask() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const createTask = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask("");
  }
  return (
    <div className={styles.createTask}>
      <form className="App-form" onSubmit={createTask}>
      <input type="text" value={task} placeholder="Adicione uma nova tarefa" onChange={(e) => setTask(e.target.value)}/>
      <button type="submit">
        Criar
        <img src={CreateTaskImg} alt="" />
      </button>
      </form>
    </div>
  );
}

export { CreateTask };
