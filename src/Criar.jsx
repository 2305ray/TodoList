import { PlusCircle } from 'phosphor-react';


import styles from './criar.module.css'

export function CriarTarefa() {
return (
    <div>
        <form  className={styles.form}>
            <textarea 
                name="create" 
                placeholder="Adicione uma nova tareda"
                required
            />

            <button className={styles.ButtonCriar} type='submit'>Criar <PlusCircle  size={18} weight='bold'/></button>
        </form>

    </div>
)
}