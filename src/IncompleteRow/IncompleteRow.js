import React from 'react';

import './IncompleteRow.css';


function IncompleteRow() {
    return (
        <div className="container incomplete-row">
            <div className="row">
                <div className="col-12 incomplete-row__text">
                    <h3>
                        You have 3 incomplete tasks:
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default IncompleteRow;