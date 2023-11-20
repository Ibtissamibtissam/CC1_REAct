import React, { useState } from 'react';
import Task from './Task';
import { v4 as uuidv4 } from 'uuid';
import './Tp3Todo.css';

export default function Form() {
  const [tasks, setTasks] = useState([
  
  ]);
  const [task, setTask] = useState('');
  const [editedTask, setEditedTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const addtask = () => {
    if (task.trim() === '') {
      // If the task is empty, display a message
      alert("Please enter a task before adding.");
      return;
    }

    // If the task is not empty, proceed with adding it
    let newtasks = [...tasks];
    let newtask = { id: uuidv4(), nom: task };
    newtasks.push(newtask);
    setTasks(newtasks);
    setTask('');
  };

  const supprimertask = (idp) => {
    // Remove the confirmation message
    let novotask = tasks.filter((t) => t.id !== idp);
    setTasks(novotask);
  };

  const startEditingTask = (taskId) => {
    const taskToEdit = tasks.find((t) => t.id === taskId);
    setEditingTask(taskId);
    setEditedTask(taskToEdit.nom);
  };

  const saveEditedTask = (taskId) => {
    const updatedTasks = tasks.map((t) =>
      t.id === taskId ? { ...t, nom: editedTask } : t
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  return (
    <div className="container">
      <h1>Todo List App</h1>
      <form>
        Enter a task : <br />
        <input
          id="a"
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="button" onClick={addtask}>Ajouter</button>
      </form>
      <br />
      <ul>
        {tasks.map((t) => (
          <span key={t.id}>
            <Task deletefunction={() => supprimertask(t.id)} txt={t.nom}
             className={editingTask === t.id ? 'editing' : ''} />
            {editingTask === t.id ? (
              <>
                <input 
                id="bb"
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button onClick={() => saveEditedTask(t.id)}>Enregistrer</button>
              </>
            ) : (
              <button onClick={() => startEditingTask(t.id)}>Modifier</button>
            )}
          </span>
        ))}
      </ul>
    </div>
  );
}
