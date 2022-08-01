import { FaPencilAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Trash from "../assets/Trash.svg";
import { deleteTask } from "../redux/slice/taskSlice";
import { RootState } from "../redux/store";
import styles from "../styles/Tasks.module.scss";
import { Modal } from "./Modal";

function Tasks() {
  const tasks = useSelector((state: RootState) => state.task);
  const dispatch = useDispatch();
  
  const removeTask = (id: string) => {
    dispatch(deleteTask(id));
    console.log(id);
  };

  return (
    <>
      <div className={styles.container}>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div>
                <input type="checkbox" id={task.id} />
                <label htmlFor={task.id}>
                  <p>{task.content}</p>
                </label>
              </div>
              <button type="button">
                <FaPencilAlt color="#808080" />
              </button>
              <button type="button" onClick={() => removeTask(task.id)}>
                <img src={Trash} alt="trash" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Modal />
    </>
  );
}

export { Tasks };
