import React from 'react';

import './TaskItem.css';


function TaskItem(props) {
    return (
        <div className="container task-item">
            <div className="row">
                <div className="col-12">
                    <p className="task-item__text">
                        {props.text}
                    </p>
                </div>
                <div className="col-6 task-item__button">
                    <button type="button" class="btn btn-outline-success">Add</button>
                </div>
                <div className="col-6 task-item__button">
                    <button type="button" class="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;
