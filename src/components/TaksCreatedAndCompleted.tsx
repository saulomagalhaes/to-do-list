import styles from "../styles/TaksCreatedAndCompleted.module.scss";

function TaksCreatedAndCompleted() {
  return (
    <div className={styles.container}>
      <div className={styles.TaksCreatedAndCompleted}>
        <p>
          Terefas Criadas <span>0</span>
        </p>
        <p>
          Concluídas <span>0</span>
        </p>
      </div>
    </div>
  );
}

export { TaksCreatedAndCompleted };
