import React from 'react';
import './App.css';
import TaskItem from './TaskItem/TaskItem';
import TaskInput from './TaskInput/TaskInput';
import IncompleteRow from './IncompleteRow/IncompleteRow';
import CompleteRow from './CompleteRow/CompleteRow';
import CompletedTasks from './CompletedTasks/CompletedTasks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TO-DO LIST</h1>
      </header>
      <TaskInput/>
      <IncompleteRow/>
      <TaskItem text="Feed the cat" />
      <TaskItem text="Go for a walk" />
      <TaskItem text="Food shopping" />
      <TaskItem text="Combine bootstrap with my react to do app" />
      <TaskItem text="CSS styling" />
      <CompleteRow/>
      <CompletedTasks text="Saturday Lightning talk"/>
      <CompletedTasks text="Javascript excercises 4"/>
      <CompletedTasks text="Saturday lecture"/>
    </div>
  );
}

export default App;

