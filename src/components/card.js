import React from 'react';

const Card = (props) => {
    return (
        <div className={`card ${props.tipo}`}>
            <h6 className="title">{props.title}</h6>
            <p className="descricao">{props.descricao}</p>
        </div>
    );
};

export default Card;