import React from 'react';
import './App.css';
import TaskItem from './TaskItem/TaskItem';
import TaskInput from './TaskInput/TaskInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        To-Do List
      </header>
      <TaskInput/>
      <TaskItem text="Task One" />
      <TaskItem text="Task Two" />
      <TaskItem text="Task Three" />
      <TaskItem text="Task Four" />
      <TaskItem text="Task Five" />
    </div>
  );
}

export default App;

