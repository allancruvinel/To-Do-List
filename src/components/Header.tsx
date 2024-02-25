import LogoSvg from '../assets/logo.svg'
import styles from './Header.module.css'

export function Header(){
    return (
        <div className={styles.header}>
            <img className={styles.img} src={LogoSvg} alt="teste" />
        </div>
    );
}