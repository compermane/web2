import React, { useState } from "react";
import "./dashboard.css";  // Supondo que você tenha um arquivo CSS separado
import MapView from "../../components/MapView";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [selectedJob, setSelectedJob] = useState(null); // Controla o estado do cartão selecionado
    const navigate = useNavigate(); // Obtém a função de navegação

    const jobData = [
        { title: "Desenvolvedor Front-End", location: "São Paulo, SP", salary: "R$6.000/mês" },
        { title: "Analista de Dados", location: "Belo Horizonte, MG", salary: "R$5.500/mês" },
        { title: "Engenheiro de Software", location: "Rio de Janeiro, RJ", salary: "R$8.000/mês" },
        { title: "Desenvolvedor Back-End", location: "Curitiba, PR", salary: "R$7.000/mês" },
        { title: "Designer de UX/UI", location: "Porto Alegre, RS", salary: "R$5.200/mês" },
        { title: "Gerente de Projetos de TI", location: "Brasília, DF", salary: "R$10.000/mês" },
        { title: "Especialista em Cloud Computing", location: "São Paulo, SP", salary: "R$9.000/mês" },
    ];
    

    const handleJobClick = (index) => {
        setSelectedJob(index === selectedJob ? null : index); // Alterna entre o estado de seleção e deseleção
    };

    // Função para lidar com o clique no botão de inscrição
    const handleInscrever = (e) => {
        e.stopPropagation(); // Impede que o clique seja propagado para o job-card
        navigate("/inscricao"); // Redireciona para a página de inscrição
    };

    return (
        <>
            <div className="navbar">
                <div className="logo">JobFinder</div>
                <div className="nav-links">
                    <a href="/dashboard">Home</a>
                    <a href="/inscritas">Vagas Inscritas</a>
                    <a href="/">Sair</a>

                </div>
            </div>
            <div className="container">
                <div className="search-bar">
                    <input type="text" placeholder="Buscar vagas..." />
                    <button className="btn-search">Pesquisar</button>
                </div>
                <div className="column-wrapper">
                    <div className="job-cards">
                        {jobData.map((job, index) => (
                            <div
                                key={index}
                                className={`job-card ${selectedJob === index ? "selected" : ""}`}
                                onClick={() => handleJobClick(index)}  // Chama o handle quando o cartão é clicado
                            >
                                <h3>{job.title}</h3>
                                <p><i className='bx bxs-map'></i> {job.location}</p>
                                <p><i className='bx bx-money'></i> {job.salary}</p>
                                {selectedJob === index && (
                                    <button
                                        className="btn-inscrever"
                                        onClick={handleInscrever}  // Passando o evento para o handler
                                    >
                                        INSCREVA-SE
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="map-column">
                        <h2>Encontre empresas perto de você</h2>
                        <MapView className="map" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
