import Clipboard from '../assets/Clipboard.svg';
import styles from '../styles/TaskEmpty.module.scss';

function TaskEmpty(){
  return (
    <div className={styles.container}>
      <img src= {Clipboard} alt="Clipboard" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}

export { TaskEmpty };

