import React, { useState, useEffect, Fragment  } from 'react';
import './App.css';
import TaskItem from './TaskItem/TaskItem';
import TaskInput from './TaskInput/TaskInput';
import IncompleteRow from './IncompleteRow/IncompleteRow';
import CompleteRow from './CompleteRow/CompleteRow';
import Header from './Header/Header';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


function App() {

  // const [tasks, setTasks] = useState([
  //   { text: "Feed the cat", completed: false, dueDate: "2020-05-20", id: uuidv4() },
  //   { text: "Go for a walk", completed: false, dueDate: "2020-06-10", id: uuidv4() },
  //   { text: "Food shopping", completed: true, dueDate: "2020-05-24", id: uuidv4() },
  //   { text: "Combine bootstrap with my react to do app", completed: true, dueDate: "2020-05-19", id: uuidv4() },
  //   { text: "CSS styling", completed: false, dueDate: "2020-06-4", id: uuidv4() }
  // ]);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("https://kia9m4w721.execute-api.eu-west-1.amazonaws.com/dev/tasks")
    .then(resp => {
    // JSON data of the response is available on the .data property resp.data.tasks
    console.log(resp.data.tasks);
    setTasks(resp.data.tasks);
  })
  .catch(err => {
    console.log("Could not fetch tasks", err);
  });
  }, []);

  

  const activeTasks = tasks && tasks.filter(task => !task.completed);

  const completedTasks = tasks && tasks.filter(task => task.completed);

  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => task.taskId !== id);
    setTasks(updatedTasks);
  }

  function completeTask(id) {
    const updatedTasks = tasks.map(task => {
      if(task.taskId === id) {
        task.completed = true;
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  function addTask(text, dueDate) {
    const newTask = {
      text: text, 
      completed: false, 
      dueDate: dueDate, 
      id: uuidv4()
    }
    const updatedTasks = [ ...tasks, newTask ]
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <Header />
      <TaskInput addTask={addTask} />
      { tasks && (
        <Fragment>
      <IncompleteRow count={activeTasks.length} />
      <ul className="task-list">
        {activeTasks.map(task => {
          return <TaskItem
            completeTask={completeTask}
            deleteTask={deleteTask}
            id={task.taskId}
            key={task.taskId}
            text={task.text}
            completed={task.completed}
            dueDate={task.date} />
        })}
      </ul>
      <CompleteRow count={completedTasks.length} />
      <ul className="task-list">
        {completedTasks.map(task => {
          return <TaskItem
            completeTask={completeTask}
            deleteTask={deleteTask}
            id={task.taskId}
            key={task.taskId}
            text={task.text}
            completed={task.completed}
            dueDate={task.date} />
        })}
      </ul>
      </Fragment>
      )}
    </div>
  );
}

export default App;

