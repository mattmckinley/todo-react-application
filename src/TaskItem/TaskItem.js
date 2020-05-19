import React from 'react';

import './TaskItem.css';


function TaskItem(props) {

    function handleDeleteClick() {
        props.deleteTask(props.id);
    }

    function handleCompleteClick() {
        props.completeTask(props.id);
    }

    return (
        <div className={`container ${props.completed ? "task-item__completed" : "task-item"}`}>
            <div className="row">
                <div className="col-12 col-md-8 task-item__all">
                    <p className="task-item__text">
                        {props.text}
                    </p>
                </div>
                <div className="col-12 col-md-2 task-item__date-all">
                    <p className="task-item__date">
                        Due: {props.dueDate}
                    </p>
                </div>
                <div className="col-6 col-md-1 task-item__button">
                    {!props.completed &&
                        <button
                            type="button"
                            className="btn btn-success task-item__done-button"
                            onClick={handleCompleteClick}>
                            <span className="material-icons">done</span>
                        </button>}
                </div>
                <div className="col-6 col-md-1 task-item__button">
                    <button
                        type="button"
                        className="btn btn-danger task-item__delete-button"
                        onClick={handleDeleteClick}>
                        <span className="material-icons">delete</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;
