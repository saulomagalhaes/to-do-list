import { useSelector } from "react-redux";
import Trash from '../assets/Trash.svg';
import { RootState } from "../redux/store";
import styles from '../styles/Tasks.module.scss';

function Tasks(){
  const tasks = useSelector((state:RootState) => state.task);
  return (
    <div className={styles.container}>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
            <input type="checkbox" id={task.id} />
            <label htmlFor={task.id}><p>{task.content}</p></label>
            </div>
            <img src={Trash} alt="trash" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export { Tasks };
