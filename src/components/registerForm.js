import React, { useState } from 'react';
import Input from './input';
import Button from './button';

const RegisterForm = () => {
    const [nomeCompleto, setNomeCompleto] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [validPasswordLength, setValidPasswordLength] = useState("");

    const handlePasswordChange = (valor) => {
        setPassword(valor);

        if (valor.length >= 6) {
            setValidPasswordLength("check-valid");
        } else {
            setValidPasswordLength("")
        }
    }
    
    return (
        <form className="form">

            <span>Criar conta</span>

            <Input title="Nome Completo"
                name="nomeCompleto"
                type="text"
                value={nomeCompleto}
                placeholder="Input"
                onChange={e => setNomeCompleto(e.target.value)}
            />

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
                placeholder="*******"
                form="register"
                onChange={e => handlePasswordChange(e.target.value)}
                classValid={validPasswordLength}
            />

            <Button title="CRIAR CONTA" action="/dashboard" className="button green" />
                
        </form>
    );
};

export default RegisterForm;
