import React from 'react';

const descList = (props) => {
    return (
        <div className="desc-info">
            <div className="desc">
                <span>{props.title}</span>
                <ul>
                {props.lista.map(item => {
                    return <li key={item}>{item}</li>
                })}
                </ul>
            </div>
        </div>
    );
};

export default descList;