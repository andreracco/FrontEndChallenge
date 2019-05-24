import React from 'react';
import titleImg from '../img/title.png';

const pageHeader = () => {
    return (
        <div className="header-container">
            <div className="header">
                <span className="titulo">Conheça os produtos</span>
                <div className="subTitulo">
                    Breve descricao sobre os produtos, descricao sobre os produtos, 
                    descricao sobre os produtos, descricao sobre os produtos...
                </div>
            </div>
            <div className="header-image">
                <img src={titleImg} alt="Produtos"/> 
            </div>             
        </div>
    );
};

export default pageHeader;