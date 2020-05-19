import React, { useState } from 'react';
import './App.css';
import TaskItem from './TaskItem/TaskItem';
import TaskInput from './TaskInput/TaskInput';
import IncompleteRow from './IncompleteRow/IncompleteRow';
import CompleteRow from './CompleteRow/CompleteRow';
import Header from './Header/Header'


function App() {

  const [tasks, setTasks] = useState([
    { text: "Feed the cat", completed: false, dueDate: "2020-05-20", id: "001" },
    { text: "Go for a walk", completed: false, dueDate: "2020-06-10", id: "002" },
    { text: "Food shopping", completed: true, dueDate: "2020-05-24", id: "003" },
    { text: "Combine bootstrap with my react to do app", completed: true, dueDate: "2020-05-19", id: "004" },
    { text: "CSS styling", completed: false, dueDate: "2020-06-4", id: "005" }
  ]);

  const activeTasks = tasks.filter(task => !task.completed);

  const completedTasks = tasks.filter(task => task.completed);

  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  function completeTask(id) {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        task.completed = true;
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <Header />
      <TaskInput />
      <IncompleteRow count={activeTasks.length} />
      <ul className="task-list">
        {activeTasks.map(task => {
          return <TaskItem
            completeTask={completeTask}
            deleteTask={deleteTask}
            id={task.id}
            key={task.id}
            text={task.text}
            completed={task.completed}
            dueDate={task.dueDate} />
        })}
      </ul>
      <CompleteRow count={completedTasks.length} />
      <ul className="task-list">
        {completedTasks.map(task => {
          return <TaskItem
            completeTask={completeTask}
            deleteTask={deleteTask}
            id={task.id}
            key={task.id}
            text={task.text}
            completed={task.completed}
            dueDate={task.dueDate} />
        })}
      </ul>
    </div>
  );
}

export default App;

