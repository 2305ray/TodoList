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
        </form>

    </div>
)
}