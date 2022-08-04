import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
// import { Modal } from "./Modal";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import Trash from "../assets/Trash.svg";
import { deleteTask, editTask } from "../redux/slice/taskSlice";
import { RootState } from "../redux/store";
import styles from "../styles/Tasks.module.scss";
Modal.setAppElement("#root");

function Tasks() {
  const tasks = useSelector((state: RootState) => state.task);
  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [contentEdited, setContent] = useState<{ id: string; content: string }>({
    id: "",
    content: "",
  });

  const removeTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  const updateTask = (id: string, content: string) => {
    setContent({ id, content });
    openModal();
  };

  const saveTask = () => {
    const { id, content } = contentEdited;
    dispatch(editTask({id, content}));
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
          {tasks.map((task) => (
            <li key={task.id}>
              <div>
                <input type="radio" id={task.id} />
                <label htmlFor={task.id}>
                  <p>{task.content}</p>
                </label>
              </div>
              <button
                type="button"
                onClick={() => updateTask(task.id, task.content)}
              >
                <FaPencilAlt color="#808080" />
              </button>
              <button type="button" onClick={() => removeTask(task.id)}>
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
            onChange={(e) => setContent({ ...contentEdited, content: e.target.value })}
          />
          <button type="submit">
            Salvar
          </button>
          </form>
      </Modal>
    </>
  );
}

export { Tasks };
