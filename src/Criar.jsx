import { PlusCircle, ClipboardText } from 'phosphor-react';


import styles from './criar.module.css'
import { useState } from 'react';

export function CriarTarefa() {


        // o react vai ficar de olho quando as tarefas mudarem e vai armazenar
    const [tarefas, setTarefas] = useState([]); // tem q iniciar vazio

    const adicionarTarefa = (event) => {
        event.preventDefault();   // Previne o envio do formulário, o que recarregaria a página

    // Obtém o valor da tarefa (no caso do seu formulário, você pode capturar o valor do textarea)
    const novaTarefa = event.target.create.value;

    // ele pegou o valor das tarefas que ja tem e vai adicionar mais
    setTarefas([...tarefas, novaTarefa])

    // Limpa o textarea após a tarefa ser adicionada
    event.target.reset();
    };

return (
    <div>
        <div className={styles.settingsAll}>
            <form  className={styles.form} onSubmit={adicionarTarefa}>
                <textarea 
                    name="create" 
                    placeholder="Adicione uma nova tarefa"
                    required
                />

                <button className={styles.ButtonCriar} 
                    type='submit'>Criar <PlusCircle 
                    size={18}
                    weight='bold'/></button>
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
                            
                        </span>
                    </p>
                    
                    
                </section>
                <div className={styles.line}></div>
                {tarefas.length > 0 ? (
                    <div>
                        {tarefas.map((tarefa, index) => (
// o map ta percorrendo todo o valor do tarefas e ta retornando uma div com uma classe onde é inserido o valor da tarefa
                        <div key={index} className={styles.task}>
                            {tarefa}
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


//  ao clicar essa função vai desabilitar o fundo primario
//  taskButton.addEventListener('click', function() {
//      if(tarefas> 0) {
//         return disableBgTask.className.add('disabled')
 //     } // ja ta implicito que caso n tenha nenhuma ele volta ao normal
//  })
//  outra opção para se colocar na classe já
