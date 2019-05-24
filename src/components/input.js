import React from 'react';

const Input = (props) => {
    
    return (  
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <input
                className="form-input"
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder} 
                onChange= {props.onChange}
            />
            {props.form === "register" &&
                <div className="password-checklist">
                    <div className="title">- Sua senha deve ter ao menos 6 caracteres<div className={`check ${props.classValid}`}></div></div>
                    <div className="title">- Outra regra que possa existir <div className="check"></div></div>
                </div>
            }
        </div>
    )
}

export default Input;