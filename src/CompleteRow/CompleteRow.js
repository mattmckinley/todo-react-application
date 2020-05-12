import React from 'react';

import './CompleteRow.css';


function CompleteRow(props) {
    return (
        <div className="container complete-row">
            <div className="row">
                <div className="col-12 complete-row__text">
                    <h3>
                        Whoop! {props.count} tasks done!
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default CompleteRow;