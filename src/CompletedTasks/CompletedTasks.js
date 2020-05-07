import React from 'react';

import './CompletedTasks.css';


function CompletedTasks(props) {
    return (
        <div className="container task-item">
            <div className="row">
                <div className="col-12 col-md-10">
                    <p className="Completed-tasks__text">
                        {props.text}
                    </p>
                </div>
                <div className="col-12 col-md-2 completed-tasks__button">
                    <button type="button" class="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default CompletedTasks;