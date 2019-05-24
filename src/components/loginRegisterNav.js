import React from 'react';

const loginRegisterNav = (props) => {
    return (
        <div className="nav">
            <p>{props.title}</p>
            <a href="##" onClick={props.onClick}>{props.link}</a>
        </div>
    );
};

export default loginRegisterNav;