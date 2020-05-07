import React from 'react';

import './TaskItem.css';


function TaskItem(props) {
    return (
        <div className="container task-item">
            <div className="row">
                <div className="col-12 col-md-10 task-item__all">
                    <p className="task-item__text">
                        {props.text}
                    </p>
                </div>
                <div className="col-6 col-md-1 task-item__button">
                    <button type="button" class="btn btn-success task-item__done-button">
                        <span class="material-icons">done</span>
                    </button>
                </div>
                <div className="col-6 col-md-1 task-item__button">
                    <button type="button" class="btn btn-danger task-item__delete-button">
                        <span class="material-icons">delete</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;
