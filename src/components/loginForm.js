import React, { useState } from 'react';
import Input from './input';
import Button from './button';

const LoginForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    return (
        <form className="form">

            <span>Acessar conta</span>

            <Input title="E-mail"
                name="email"
                type="text"
                value={email}
                placeholder="Input"
                onChange={e => setEmail(e.target.value)}
            />

            <Input title="Password"
                name="password"
                type="password"
                value={password}
                placeholder="********"
                onChange={e => setPassword(e.target.value)}
            />

            <Button title="ACESSAR CONTA" action="/dashboard" className="button green" />
                
        </form>
    );
};

export default LoginForm;
