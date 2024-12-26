import styles from './App.module.css';
import { Header } from './Header';
import { CriarTarefa } from './Criar';
import './global.css'

export function App() {
  return (
    <div>
      <div className={styles.appContainer}>
        <Header className={styles.header}/>
        <CriarTarefa className={styles.criarTarefa}/>
      </div>
    </div>
      
    
  );
}

export default App
