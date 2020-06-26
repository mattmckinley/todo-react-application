import React, { useState } from 'react';

import './TaskInput.css';


function TaskInput(props) {

    const [text, setText] = useState("");

    const [dueDate, setDueDate] = useState("")

    function handleTextChange(event) {
        setText(event.target.value);
    }

    function handleDateChange(event) {
        setDueDate(event.target.value)
    }

    function handleAddTaskClick() {
        props.addTask(text, dueDate);
    }
    return (
        <div className="container task-input">
            <div className="row">
                <div className="col-12 col-md-5 task-input__text-box">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="What do you need to do?"
                        onChange={handleTextChange}
                        value={text} />
                </div>
                <div className="col-12 col-md-5 task-input__date-box">
                    <input
                        type="date"
                        className="form-control add-task__input-field add-task--date"
                        onChange={handleDateChange}
                        value={dueDate} />
                </div>
                <div className="col-12 col-md-2 task-input__button">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleAddTaskClick}
                    >Add</button>
                </div>
            </div>
        </div>
    );
}

export default TaskInput;