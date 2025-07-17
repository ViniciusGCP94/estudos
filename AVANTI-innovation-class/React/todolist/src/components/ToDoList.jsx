import React from 'react'
import styles from './ToDoList.module.css'

const ToDoList = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Lista de Tarefas</h2>
        <div className={styles.inputContent}>
            <input 
                type='text'
                placeholder='Adicione uma tarefa'
                className={styles.input}
            />
            <button className={styles.button}>Adicionar Tarefa</button>
        </div>
        <ul className={styles.taskList}>
          <li className={styles.taskListItem}>Tarefa</li>
        </ul>
    </div>
  )
}

export default ToDoList