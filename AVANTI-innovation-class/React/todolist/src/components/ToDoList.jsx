import React from 'react'
import styles from './ToDoList.module.css'

const ToDoList = () => {
    const [task, setTask] = React.useState('');
    const [tasks, setTasks] = React.useState([]);

    const addTask = () => {
      if (task.trim() === '') return;
      setTasks([...tasks, task]);
      setTask('');
    }


    return (
      <div className={styles.container}>
          <h2 className={styles.title}>Lista de Tarefas</h2>
          <div className={styles.inputContent}>
              <input 
                  type='text'
                  placeholder='Adicione uma tarefa'
                  className={styles.input}
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
              />
              <button onClick={addTask} className={styles.button}>Adicionar Tarefa</button>
          </div>
          <ul className={styles.taskList}>
          {tasks.map((taskItem, index) => (
            <li key={index} className={styles.taskListItem}>{taskItem}</li>
          ))}
            
          </ul>
      </div>
    )
}

export default ToDoList