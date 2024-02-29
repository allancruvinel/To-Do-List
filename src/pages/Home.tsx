import { Header } from "../components/Header";
import styles from "../pages/Home.module.css";
import PlusIcon from '../assets/plus-icon.svg'
import { TasksField } from "../components/TasksField";
import { useState } from "react";

export interface TaskItem{
  Title:string,
  Finished:boolean
}
export interface TaskResume{
  TasksCreated:number,
  TasksCompleted:number
}
export function Home() {

  const [taskList,setTaskList] = useState<TaskItem[]>([])
  const [taskResume,setTaskResume] = useState<TaskResume>({TasksCompleted:0,TasksCreated:0})

  function handleCreateTask(){
    setTaskList([...taskList,taskItem])
    setTaskItem({Finished:false,Title:""})
    updateTaskResume();
  }

  function handleChangeTaskStatus(taskChanged:TaskItem){
    var newList = taskList.map(item => item===taskChanged?{Finished:!item.Finished,Title:item.Title}:item);
    setTaskList(newList)
    updateTaskResume();
  }

  function handleDeleteTask(taskChanged:TaskItem){
    var newList = taskList.filter(item => item !==taskChanged);
    setTaskList(newList)
    updateTaskResume();
  }

  const updateTaskResume = () =>{
    setTaskList((state)=>{
      const alltasks = state.length;
      const completedTasks = state.reduce((accumulator, currentValue) =>{return currentValue.Finished? accumulator + 1:accumulator}, 0)
      setTaskResume({TasksCompleted: completedTasks,TasksCreated:alltasks});
      return state})
  }

  const [taskItem,setTaskItem] = useState<TaskItem>({Finished:false,Title:""});
  return (
    <div>
      <Header />
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.inputTask}`}>
          <input type="text" value={taskItem.Title} onChange={e => setTaskItem({Finished:false,Title:e.target.value})} /> <button onClick={handleCreateTask}>Criar <img src={PlusIcon} alt="" /></button>
        </div>
        <TasksField taskList={taskList} handleChangeTaskStatusProps={handleChangeTaskStatus} handleDeleteTaskProps={handleDeleteTask} taskResume={taskResume} />
      </div>
    </div>
  );
}
