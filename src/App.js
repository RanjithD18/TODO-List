import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
      setTasks([...tasks, newTask]);
      setNewTask('');
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    const editTa=tasks.map((c,i)=>{
      if(i==index){
        return newTask;
      }
      else{
        return c;
      }
    });
    setTasks(editTa);
    setNewTask('');
  };
  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input 
          type="text" 
          value={newTask} 
          onChange={(a) => setNewTask(a.target.value)} 
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task} 
            <span>
            <button className="edit-button" onClick={() => editTask(index)}>Edit</button>
            <button className="remove-button" onClick={() => removeTask(index)}>Remove</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;