import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <div className="footer-container">
            <div className="dashboard-divider bottom-divider"></div>   
            <div className="footer">
                <Link to="/">Termos</Link> 
                <Link to="/">Política de Privacidade</Link>
            </div>
        </div>
    );
};

export default footer;