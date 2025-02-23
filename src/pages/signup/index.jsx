import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  
import "./signup.css";
import axios from "axios";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");       // Declaração do estado para erro
    const [success, setSuccess] = useState("");   // Declaração do estado para sucesso

    const navigate = useNavigate();  // Inicializa o hook useNavigate

    useEffect(() => {
        document.title = "Signup - JobFinder"
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();

        // Cria um objeto com os dados do novo usuário
        const newUser = { name, email, password };

        // Envia os dados para o JSON Server
        axios.post("http://localhost:5000/users", newUser)
            .then(response => {
                console.log("Registro bem-sucedido:", response.data);
                setSuccess("Registro realizado com sucesso!");
                setError(""); // Limpa qualquer mensagem de erro anterior
                setTimeout(() => {
                    navigate("/dashboard");
                }, 2000);
            })
            .catch(error => {
                console.error("Erro ao registrar:", error);
                setError("Erro ao realizar o registro. Tente novamente.");
                setSuccess("");
            });
    };

    return (
        <>
            <div className="navbar">
                <div className="logo">JobFinder</div>
                <div className="nav-links">
                    <a href="/">Home</a>
                </div>
            </div>

            <div className="signup-container">
                <div className="signup-form">
                    <h2>Inscreva-se</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="name">Nome</label>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="Digite seu nome"
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
                            <label htmlFor="password">Senha</label>
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>

                        {error && <div className="error-message">{error}</div>}
                        {success && <div className="success-message">{success}</div>}

                        <button type="submit" className="btn-signup">Cadastrar</button>
                    </form>
                    <div className="login-link">
                        <p>Já tem uma conta? <a href="/login">Faça login</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
