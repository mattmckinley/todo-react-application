import React from 'react';

import './TaskInput.css';


function TaskInput() {
    return (
        <div className="container task-input">
            <div className="row">
                <div className="col-12 col-md-10">
                <input class="form-control" type="text" placeholder="Add something to your list..."/>
                </div>
                <div className="col-12 col-md-2">
                <button type="button" class="btn btn-outline-success">Add</button>
                </div>
            </div>
        </div>
    );
}

export default TaskInput;