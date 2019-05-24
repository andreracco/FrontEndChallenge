import React from 'react';
import LogoNike from '../img/LogoNike.svg';
import LogoLoreal from '../img/LogoLoreal.svg';

const descUsage = (props) => {
    return (
        <div className="desc-info">
          <div className="usage-info">
          
            <span>{props.title}</span>

            <div className="usage-logos">
              <img src={LogoLoreal} alt="Loreal" />
              <img src={LogoNike} alt="Nike" />
              <img src={LogoLoreal} alt="Loreal" />
            </div>

          </div>
        </div>
    );
};

export default descUsage;