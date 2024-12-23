import styles from './App.module.css';
import { Header } from './Header';
import {CriarTarefa} from './Criar'

import './global.css'

function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <section>
          <CriarTarefa />
        </section>
      </div>

</div>
  )
}

export default App
