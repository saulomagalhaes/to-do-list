import CreateTaskImg from "../assets/CreateTask.svg";
import styles from "../styles/CreateTask.module.scss";

function CreateTask() {
  return (
    <div className={styles.createTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="button">
        Criar
        <img src={CreateTaskImg} alt="" />
      </button>
    </div>
  );
}

export { CreateTask };
