import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import Trash from "../assets/Trash.svg";
import { deleteTask, editTask, setState, toggleTask } from "../redux/slice/taskSlice";
import { RootState } from "../redux/store";
import styles from "../styles/Tasks.module.scss";
Modal.setAppElement("#root");

function  Tasks({localTasks}: any) {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task);
  useEffect(() => {
    dispatch(setState(localTasks));
  } , []);
  console.log(tasks);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [contentEdited, setContent] = useState<{ id: string; content: string }>(
    {
      id: "",
      content: "",
    }
  );

  const removeTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  const updateTask = (id: string, content: string) => {
    setContent({ id, content });
    openModal();
  };

  const handleCheckbox = (id: string, checked: boolean) => {
    dispatch(toggleTask({id, checked}));
  };

  const saveTask = () => {
    const { id, content } = contentEdited;
    dispatch(editTask({ id, content }));
    closeModal();
  };

  const openModal: any = () => {
    setIsOpen(true);
  };

  const closeModal: any = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.container}>
        <ul>
          {tasks.map(({id, content, isCompleted}) => (
            <li key={id}>
              <div>
                <input
                  type="checkbox"
                  checked={isCompleted}
                  id={id}
                  onChange={({target}) => handleCheckbox(id, target.checked)}
                />
                <label htmlFor={id}>
                  <p className={isCompleted ? styles['complete-task']: ""}>
                    {content}
                  </p>
                </label>
              </div>
              <button
                type="button"
                onClick={() => updateTask(id, content)}
              >
                <FaPencilAlt color="#808080" />
              </button>
              <button type="button" onClick={() => removeTask(id)}>
                <img src={Trash} alt="trash" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName={styles.overlay}
        className={styles.modal}
      >
        <form className="Modal-form" onSubmit={saveTask}>
          <input
            type="text"
            value={contentEdited.content}
            onChange={(e) =>
              setContent({ ...contentEdited, content: e.target.value })
            }
          />
          <button type="submit">Salvar</button>
        </form>
      </Modal>
    </>
  );
}

export { Tasks };
