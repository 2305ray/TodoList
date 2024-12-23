import styles from './App.module.css';
import { Header } from './Header';
import { CriarTarefa } from './Criar';
import { Tasks } from './Tasks';
import './global.css'

export function App() {
  return (
    <div>
    <div className={styles.appContainer}>
      <Header />
      <CriarTarefa />
      <Tasks />
    </div>
    <div>
      
    </div>
    </div>
  );
}

export default App
