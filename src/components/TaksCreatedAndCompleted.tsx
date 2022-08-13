import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import styles from "../styles/TaksCreatedAndCompleted.module.scss";

function TaksCreatedAndCompleted() {
  const tasks = useSelector((state: RootState) => state);
  const totalTasks = tasks.length;
  const completed = tasks.filter((t) => t.isCompleted).length;
  
  return (
    <div className={styles.container}>
      <div className={styles.TaksCreatedAndCompleted}>
        <p>
          Tarefas Criadas <span>{totalTasks}</span>
        </p>
        <p>
          Concluídas <span>{`${completed} de ${totalTasks}`}</span>
        </p>
      </div>
    </div>
  );
}

export { TaksCreatedAndCompleted };
