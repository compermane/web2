import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Importe o useNavigate
import "./inscricaoVaga.css";

function InscricaoVaga() {
    const navigate = useNavigate(); // Inicializa o hook useNavigate
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState(null);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Cria um objeto com os dados da inscrição
        const newApplication = {
            name,
            email,
            resume: resume ? resume.name : "" // Armazena o nome do arquivo de currículo
        };
    
        // Envia a inscrição para o backend
        axios
            .post("http://localhost:5000/inscricoes", newApplication)
            .then(response => {
                console.log("Inscrição realizada:", response.data);
                setMessage("Inscrição realizada com sucesso!"); // Mensagem de sucesso
                setError(""); // Limpa qualquer mensagem de erro anterior
    
                // Navega para a tela do dashboard após o envio
                setTimeout(() => {
                    navigate("/dashboard"); // Redireciona para o dashboard após 2 segundos
                }, 2000); 
            })
            .catch(err => {
                console.error("Erro ao enviar inscrição:", err);
                setError("Erro ao realizar a inscrição. Tente novamente."); // Mensagem de erro
                setMessage(""); 
            });
    };
    

    return (
        <div className="signup-container">
            <div className="navbar">
                <div className="logo">JobFinder</div>
                <div className="nav-links">
                    <a href="/dashboard">Home</a>
                    <a href="/">Sair</a>
                </div>
            </div>

            <div className="signup-form">
                <h2>Inscreva-se na vaga</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Digite seu nome completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="resume">Currículo (PDF)</label>
                        <input
                            type="file"
                            id="resume"
                            accept=".pdf"
                            onChange={(e) => setResume(e.target.files[0])}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-submit">Inscrever-se</button>
                </form>

                {message && <p className="success-message">{message}</p>}
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
}

export default InscricaoVaga;
