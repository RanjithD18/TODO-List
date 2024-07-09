## ReactJS Day-2
### App.js:
~~~
import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

function App() {
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

export default App;
~~~
### App.css:
~~~
.container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  text-align: center;
}

.input-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

button {
  padding: 10px 20px;

  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.task-list {
  list-style-type: none;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.task-item button {
  background-color: #dc3545;
  margin-left: 5px;
}
~~~
### Output:
https://ranjithd18.github.io/TODO-List/
![image](https://github.com/RanjithD18/TODO-List/assets/93427221/d96d8f4c-3201-4604-93e6-06c10037f703)
![image](https://github.com/RanjithD18/TODO-List/assets/93427221/4ccb8c00-2e84-40a2-a4ec-db3ae0aaf1c8)
![image](https://github.com/RanjithD18/TODO-List/assets/93427221/65abab5e-66de-4f05-a9ef-1ab35bf09a96)


