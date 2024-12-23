import styles from './Tasks.module.css'

export function Tasks() {
    return (
        <div>
            <section className={styles.tasksHeader}>
                <p >Tarefas criadas</p>
                <p>Tarefas concluídas</p>
            </section>
        </div>
    )
}