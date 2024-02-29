import { useEffect, useState } from 'react'
import ThrashIcon from '../assets/trash-2.svg'
import styles from './Task.module.css'
import { TaskItem } from '../pages/Home';

interface TaskProps{
    task:TaskItem,
    handleChangeTaskStatusProps:(newTask:TaskItem)=>void,
    handleDeleteTaskProps:(newTask:TaskItem)=>void
}



export function Task({task,handleChangeTaskStatusProps,handleDeleteTaskProps}:TaskProps){

    const [isDone,SetIsDone] = useState(false);
    
    const handleChangeTaskStatus = () => handleChangeTaskStatusProps(task);
    const handleDeleteTask = () => handleDeleteTaskProps(task);

    return (
        <div className={styles.card}>
            <input type="radio" checked={task.Finished} name="" id="" onChange={()=>{}} onClick={handleChangeTaskStatus} />
            <p  className={task.Finished? styles.taskDone : styles.taskNotDone}>{task.Title}</p>
            <div onClick={handleDeleteTask} className={styles.imgzone}><img src={ThrashIcon} alt="" /></div>
        </div>
    )
}