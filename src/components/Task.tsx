import { useEffect, useState } from 'react'
import ThrashIcon from '../assets/trash-2.svg'
import styles from './Task.module.css'

interface TaskProps{
    content:string,
}



export function Task({content}:TaskProps){

    const [isDone,SetIsDone] = useState(false);
    
    
    
    
    const handleFinishTask = () =>{
        
        SetIsDone(!isDone)
    }

 
    useEffect(()=>{

    },[])

    return (
        <div className={styles.card}>
            <input type="radio" checked={isDone} name="" id="" onChange={()=>{}} onClick={handleFinishTask} />
            <p  className={isDone? styles.taskDone : styles.taskNotDone}>{content}</p>
            <div className={styles.imgzone}><img src={ThrashIcon} alt="" /></div>
        </div>
    )
}