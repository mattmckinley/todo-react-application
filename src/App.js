import React, { useState } from 'react';
import './App.css';
import TaskItem from './TaskItem/TaskItem';
import TaskInput from './TaskInput/TaskInput';
import IncompleteRow from './IncompleteRow/IncompleteRow';
import CompleteRow from './CompleteRow/CompleteRow';


function App() {

  const [tasks, setTasks] = useState([
    { text: "Feed the cat", completed: false, dueDate: "2020-05-20" },
    { text: "Go for a walk", completed: false, dueDate: "2020-06-10" },
    { text: "Food shopping", completed: true, dueDate: "2020-05-24" },
    { text: "Combine bootstrap with my react to do app", completed: true, dueDate: "2020-05-19" },
    { text: "CSS styling", completed: false, dueDate: "2020-06-4" }
  ]);

  const activeTasks = tasks.filter(task => !task.completed);

  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TO-DO LIST</h1>
      </header>
      <TaskInput />
      <IncompleteRow count={activeTasks.length} />
      <ul className="task-list">
        {activeTasks.map(task => <TaskItem text={task.text} completed={task.completed} dueDate={task.dueDate} />)}
      </ul>
      <CompleteRow count={completedTasks.length} />
      <ul>
        {completedTasks.map(task => <TaskItem text={task.text} completed={task.completed} dueDate={task.dueDate} />)}
      </ul>
    </div>
  );
}

export default App;

