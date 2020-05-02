import React from 'react';

import './App.css';

import TaskItem from './TaskItem/TaskItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        To-Do App
      </header>
      <TaskItem text="Task item 1" />
      <TaskItem text="Task item 1" />
      <TaskItem text="Task item 1" />
      <TaskItem text="Task item 1" />
      <TaskItem text="Task item 1" />
    </div>
  );
}

export default App;

