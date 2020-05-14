import React from 'react';

import pencilIcon from '../Icons/pencil-2.svg';

import './Header.css';


function Header() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-1 col-md-2 header">
                    <img src={pencilIcon} alt="pencil logo" className="logo-svg" />
                </div>
                <div className="col-11 col-md-10 header">
                    <h1>TO-DO LIST</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;