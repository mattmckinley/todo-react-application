import React from 'react';

import './TaskItem.css';


function TaskItem(props) {
    return (
        <div className="task-item__card">
            <p className="task-item__text">
                {props.text}
            </p>
            <button className="task-item__button">Done</button>
            <button className="task-item__button">Delete</button>
        </div>
    );
}

export default TaskItem;
