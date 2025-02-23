import React, { useState, useEffect } from "react";
import "./vagasInscritas.css";
import axios from "axios";  // Importa o Axios para fazer requisições
import { useNavigate } from "react-router-dom";

function VagasInscritas() {
    const navigate = useNavigate(); // Obtém a função de navegação

    // Estado para armazenar as inscrições
    const [inscricoes, setInscricoes] = useState([]);
    const [loading, setLoading] = useState(true);  // Estado para controlar o carregamento

    // Função para pegar as inscrições do servidor
    useEffect(() => {
        document.title = "Vagas Inscritas - JobFinder"
        axios
            .get("http://localhost:5000/inscricoes")  // Faz uma requisição GET para o JSON Server
            .then((response) => {
                setInscricoes(response.data); // Armazena as inscrições no estado
                setLoading(false);  // Finaliza o estado de carregamento
            })
            .catch((error) => {
                console.log("BRUH");
                console.error("Erro ao buscar as inscrições:", error);
                setLoading(false);  // Mesmo em erro, finaliza o estado de carregamento
            });
    }, []); // O array vazio garante que o efeito só seja executado uma vez

    // Função para remover uma inscrição
    const handleRemoverInscricao = (id) => {
        // Faz uma requisição DELETE para remover a inscrição no backend
        axios
            .delete(`http://localhost:5000/inscricoes/${id}`)
            .then(() => {
                // Após a remoção, atualiza a lista de inscrições no estado
                setInscricoes(inscricoes.filter((inscricao) => inscricao.id !== id));
            })
            .catch((error) => {
                console.error("Erro ao remover a inscrição:", error);
            });
    };

    return (
        <>
            <div className="navbar">
                <div className="logo">JobFinder</div>
                <div className="nav-links">
                    <a href="/dashboard">Home</a>
                    <a href="/">Sair</a>
                </div>
            </div>

            <div className="container">
                <h2>Vagas Inscritas</h2>
                {loading ? (
                    <p>Carregando suas inscrições...</p> 
                ) : inscricoes.length > 0 ? (
                    <div className="vagas-list">
                        {inscricoes.map((vaga) => (
                            <div key={vaga.id} className="vaga-card">
                                <h3>{vaga.title}</h3>
                                <p><i className="bx bxs-map"></i> {vaga.location}</p>
                                <p><i className="bx bx-money"></i> {vaga.salary}</p>
                                <button 
                                    className="btn-remover"
                                    onClick={() => handleRemoverInscricao(vaga.id)} 
                                >
                                    Remover Inscrição
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Você ainda não se inscreveu em nenhuma vaga.</p> 
                )}
            </div>
        </>
    );
}

export default VagasInscritas;
