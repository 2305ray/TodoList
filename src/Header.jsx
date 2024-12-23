import styles from './Header.module.css'
import todologo from '../img/logo.svg'

export function Header() {
   return ( 
        <div>

            <header className={styles.header}><img src={todologo}alt="Logo to do List" /></header>
            
        </div>
    )
}