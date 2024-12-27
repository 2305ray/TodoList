import { PlusCircle, ClipboardText, Trash } from 'phosphor-react';
import styles from './criar.module.css';
import { useState } from 'react';

export function CriarTarefa() {
    // Estado para armazenar as tarefas
    const [tarefas, setTarefas] = useState([]);

    // Função para adicionar uma nova tarefa
    const adicionarTarefa = (event) => {
        event.preventDefault(); // Previne o envio do formulário
        
        const novaTarefa = event.target.create.value; // Pega o valor da tarefa
        setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]); // Adiciona a tarefa com status de não concluída
        
        event.target.reset(); // Limpa o campo de entrada
    };

    // Função para alternar o estado de concluída (marcar/desmarcar)
    const alternarConcluida = (index) => {
        const novasTarefas = tarefas.map((tarefa, i) =>
            i === index ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        );
        setTarefas(novasTarefas); // Atualiza o estado com a tarefa alterada
    };

    // Função para excluir uma tarefa
    const excluirTarefa = (index) => {
        setTarefas(tarefas.filter((_, i) => i !== index)); // Remove a tarefa com base no índice
    };

    // Contagem de tarefas concluídas
    const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida).length;

    return (
        <div>
            <div className={styles.settingsAll}>
                <form className={styles.form} onSubmit={adicionarTarefa}>
                    <textarea 
                        name="create" 
                        placeholder="Adicione uma nova tarefa"
                        required 
                    />
                    <button className={styles.ButtonCriar} type="submit">
                        Criar <PlusCircle size={18} weight="bold" />
                    </button>
                </form>

                <section className={styles.tasksHeader}>
                    <p className={styles.colorBlue}>
                        Tarefas criadas 
                        <span className={styles.counter}>
                            {tarefas.length}
                        </span>
                    </p>

                    <p className={styles.colorPurple}>
                        Concluídas
                        <span className={styles.counter}>
                            {`${tarefasConcluidas} de ${tarefas.length}`}
                        </span>
                    </p>
                </section>

                <div className={styles.line}></div>

                {tarefas.length > 0 ? (
                    <div className={styles.containerTasks}>
                        {tarefas.map((tarefa, index) => (
                            <div key={index} className={styles.taskContainer}>
                                <div className={styles.taskContent}>
                                    <label htmlFor={`taskCheckbox-${index}`}>
                                        <input 
                                            onClick={() => alternarConcluida(index)} 
                                            type="checkbox" 
                                            id={`taskCheckbox-${index}`} 
                                            checked={tarefa.concluida} 
                                        />
                                        <span 
                                            style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}
                                        >
                                            {tarefa.texto}
                                        </span>
                                    </label>
                                    <button title="Deletar tarefa" onClick={() => excluirTarefa(index)}>
                                    <Trash size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.dontHaveTasks}>
                        <ClipboardText size={70} />
                        <p className={styles.boldParagraph}>
                            Você ainda não tem tarefas cadastradas
                        </p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                )}
            </div>
        </div>
    );
}
