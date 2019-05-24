import React from 'react';
import HelpIcon from '../img/help-circle-outline.png';
import BellIcon from '../img/bell-outline.png';
import FaceIcon from '../img/face.png';
import { Link } from 'react-router-dom';

const topMenu = () => {
    return (
        <div className="menu-container">
            <div className="menu">
                <Link to="/"> <img src={HelpIcon} alt="Ajuda" /> </Link> 
                <Link to="/"> <img src={BellIcon} alt="Notificações" /> </Link>
                <Link to="/"> <img src={FaceIcon} alt="Minha conta" />Username </Link>
            </div>
            <div className="dashboard-divider top-divider"></div>
        </div>
    );
};

export default topMenu;