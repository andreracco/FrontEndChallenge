import React from 'react';
import Card from '../components/card';
import TopMenu from '../components/topMenu';
import PageHeader from '../components/pageHeader';
import Footer from '../components/footer';

const Dashboard = () => {
    return (
        <div className="dashboard-page">
            
            <TopMenu />
            
            <div className="content-container">

                <PageHeader />

                <div className="content">
                    <h6 className="logistica-titulo">LOGISTICA</h6>
                    <Card title="ARMAZENAGEM" tipo="logistica" descricao="Breve descricao do servico em no maximo duas linhas " />
                    <Card title="COLETA" tipo="logistica" descricao="Breve descricao do servico em no maximo duas linhas " />
                    <Card title="ENTREGA" tipo="logistica" descricao="Breve descricao do servico em no maximo duas linhas " />
                </div>

                <div className="content">
                    <h6 className="marketing-titulo">MARKETING</h6>
                    <Card title="DIVULGACAO" tipo="marketing" descricao="Breve descricao do servico em no maximo duas linhas " />
                    <Card title="CMS" tipo="marketing" descricao="Breve descricao do servico em no maximo duas linhas " />
                </div>

                <div className="content">
                    <h6 className="pagamento-titulo">PAGAMENTO</h6>
                    <Card title="SAC" tipo="pagamento" descricao="Breve descricao do servico em no maximo duas linhas " />
                    <Card title="CONSUMO" tipo="pagamento" descricao="Breve descricao do servico em no maximo duas linhas " />
                    <Card title="RELACIONAMENTO" tipo="pagamento" descricao="Breve descricao do servico em no maximo duas linhas " />
                </div>

            </div>
            
            <Footer />
        </div>
    );
};

export default Dashboard;