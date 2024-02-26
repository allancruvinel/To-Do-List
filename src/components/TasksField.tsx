import { Task } from "./Task";
import styles from "./TasksFields.module.css";

export function TasksField() {
  return (
    <div className={styles.taskfield}>
      <div className={styles.header}>
        <div>
          <p className={styles.tasklabel}>Tarefas criadas </p>
          <p className={styles.taskcount}>0</p>
        </div>
        <div>
          <p className={`${styles.tasklabelconcluida}`}>Concluídas</p>
          <p className={styles.taskcount}>0</p>
        </div>
      </div>
      <div className={styles.clipboard}>
        <Task content={'texto da task'}/>
        <Task content={'texto da task2'} />
        <Task content={'texto da task3'} />
        <Task content={'texto da task4'} />
        {/* <div className={styles.emptylist}>
          <img src={DocumentIcon} alt="" />
          <div>
            <strong><p>Você ainda não tem tarefas cadastradas</p></strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
