import React, { useState } from 'react';
import DescList from '../components/descList';
import DescUsage from '../components/descUsage';
import RegisterForm from '../components/registerForm';
import LoginForm from '../components/loginForm';
import LoginRegisterNav from '../components/loginRegisterNav';

function LoginRegister() {

    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [descTitle, setDescTitle] = useState("Crie sua conta");

    const handleRegisterLoginLink = (link) => {
        setShowRegisterForm(!showRegisterForm);
        setDescTitle(showRegisterForm ? "Crie sua conta" : "Acesse sua conta");
    }

    const Form = () => {
        return showRegisterForm ? <LoginForm /> : <RegisterForm />
    }

    const BottomNav = () => {
        let title = showRegisterForm ? "Ainda não possui conta?" : "Já possui conta?";
        let link =  showRegisterForm ? "Crie sua conta" : "Acesse sua conta";

        return <LoginRegisterNav title={title} link={link} onClick={() => handleRegisterLoginLink()} />
    }

    return (
        <div className="page">
            <div className="section account-desc-container">

                <DescList title={descTitle} 
                            lista={["Beneficios e o que poderá ser feito", 
                                    "Descricao de um dos benificios", 
                                    "Descricao de outro benificio", 
                                    "Descricao de mais um benificio"]} 
                />

                <DescUsage title="Utilizado por empresas como:" />

            </div>

            <div className="section account-form-container">
                <div className="divider"></div>
                
                <div className="formContainer">
                    {Form()}
                    <hr />
                    {BottomNav()}
                </div>
            </div>
        
        </div>
    );
};

export default LoginRegister;