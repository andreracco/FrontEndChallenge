import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return(
        <Link className={props.className} to={props.action}>
            {props.title}
        </Link>
    )
}

export default Button;