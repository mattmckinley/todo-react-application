import React from 'react';

import './CompletedTasks.css';


function CompletedTasks(props) {
    return (
        <div className="container completed-tasks">
            <div className="row">
                <div className="col-12 col-md-10 completed-tasks__all">
                    <p className="completed-tasks__text">
                        {props.text}
                    </p>
                </div>
                <div className="col-12 col-md-2 completed-tasks__button">
                    <button type="button" class="btn btn-danger delete-forever__button">
                        <span class="material-icons">delete_forever</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CompletedTasks;