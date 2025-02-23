import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  
import axios from 'axios';
import "./login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");  // Adicionando estado para erros
    
    useEffect(() => {
        document.title = "Login - JobFinder"
    }, [])
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Faz uma requisição GET para buscar o usuário com o email informado
        axios.get(`http://localhost:5000/users?email=${email}`)
          .then(response => {
            // response.data será um array de usuários que correspondem ao filtro
            const user = response.data[0];
            if (user && user.password === password) {
              console.log("Login bem-sucedido", { email, password });
              navigate("/dashboard");
            } else {
              setError("E-mail ou senha inválidos");  // Define a mensagem de erro
            }
          })
          .catch(error => {
            console.error("Erro ao acessar o back-end:", error);
            setError("Erro ao realizar o login");  // Define erro de conexão
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

            <div className="login-container">
                <div className="login-form">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
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

                        {error && <div className="error-message">{error}</div>} {/* Exibe erro se houver */}

                        <button type="submit" className="btn-login">Entrar</button>
                    </form>
                    <div className="signup-link">
                        <p>Não tem uma conta? <a href="/cadastro">Inscreva-se</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
