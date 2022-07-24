import Clipboard from '../assets/Clipboard.svg';
import styles from '../styles/ListTasks.module.scss';

function ListTasks(){
  return (
    <div className={styles.container}>
      <img src= {Clipboard} alt="Clipboard" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}

export { ListTasks };
