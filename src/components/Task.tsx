import ThrashIcon from '../assets/trash-2.svg'
import styles from './Task.module.css'

export function Task(){
    return (
        <div className={styles.card}>
            <input type="radio" name="" id="" />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <div className={styles.imgzone}><img src={ThrashIcon} alt="" /></div>
        </div>
    )
}