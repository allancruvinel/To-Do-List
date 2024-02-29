import { useState } from "react";
import { TaskItem, TaskResume } from "../pages/Home";
import { Task } from "./Task";
import styles from "./TasksFields.module.css";

interface TasksFieldProps{
  taskList:TaskItem[],
  handleChangeTaskStatusProps:(newTask:TaskItem)=>void,
  handleDeleteTaskProps:(newTask:TaskItem)=>void,
  taskResume:TaskResume
}

export function TasksField({taskList,taskResume,handleChangeTaskStatusProps,handleDeleteTaskProps}:TasksFieldProps) {

  
  function handleChangeTaskStatus(taskChanged:TaskItem){
    handleChangeTaskStatusProps(taskChanged);
  }

  function handleDeleteTask(taskChanged:TaskItem){
    handleDeleteTaskProps(taskChanged)
  }

  return (
    <div className={styles.taskfield}>
      <div className={styles.header}>
        <div>
          <p className={styles.tasklabel}>Tarefas criadas </p>
          <p className={styles.taskcount}>{taskResume.TasksCreated}</p>
        </div>
        <div>
          <p className={`${styles.tasklabelconcluida}`}>Concluídas</p>
          <p className={styles.taskcount}>{taskResume.TasksCompleted}</p>
        </div>
      </div>
      <div className={styles.clipboard}>
      {taskList.map(item => <Task key={parseInt((Math.random() * 4545458).toString())} handleChangeTaskStatusProps={handleChangeTaskStatus} handleDeleteTaskProps={handleDeleteTask} task={item} />)}
        
        
        {/* <Task content={'texto da task3'} />
        <Task content={'texto da task4'} /> */}
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
