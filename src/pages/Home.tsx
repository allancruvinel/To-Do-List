import { Header } from "../components/Header";
import styles from "../pages/Home.module.css";
import PlusIcon from '../assets/plus-icon.svg'
import { TasksField } from "../components/TasksField";

export function Home() {
  return (
    <div>
      <Header />
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.inputTask}`}>
          <input type="text" /> <button>Criar <img src={PlusIcon} alt="" /></button>
        </div>
        <TasksField/>
      </div>
    </div>
  );
}
