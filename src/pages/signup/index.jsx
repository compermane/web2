import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  
import "./signup.css";
import axios from "axios";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [cep, setCep] = useState("");
    const [address, setAddress] = useState({ logradouro: "", bairro: "", cidade: "", uf: "" });

    const [error, setError] = useState("");       // Declaração do estado para erro
    const [success, setSuccess] = useState("");   // Declaração do estado para sucesso

    const navigate = useNavigate();  // Inicializa o hook useNavigate

    useEffect(() => {
        document.title = "Signup - JobFinder"
    }, [])

    const fetchAddress = async (cep) => {
        console.log("BRUH 1")
        if (cep.length === 8) {
            console.log("BRUH 2")
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                if (response.data.erro) {
                    setError("CEP inválido");
                    setAddress( { logradouro: "", bairro: "", cidade: "", uf: "" } );
                } else {
                    setError("");
                    setAddress( {
                        logradouro: response.data.logradouro,
                        bairro: response.data.bairro,
                        cidade: response.data.localidade,
                        uf: response.data.uf
                    } )
                }
            } catch(error) {
                setError("CEP deve ter 8 dígitos");
                setAddress( { logradouro: "", bairro: "", cidade: "", uf: "" } );
            }
        }
    };

    const handleCepChange = (e) => {
        const newCep = e.target.value.replace(/\D/g, "");
        setCep(newCep);

        if (newCep.length === 8) {
            fetchAddress(newCep);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Cria um objeto com os dados do novo usuário
        const newUser = { name, email, password, cep, ...address };

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
                        <div className="input-group">
                            <label htmlFor="cep">CEP</label>
                            <input 
                                type="text" 
                                id="cep" 
                                placeholder="Digite seu CEP"
                                value={cep}
                                onChange={handleCepChange} 
                                required 
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="logradouro">Endereço</label>
                            <input 
                                type="text" 
                                id="logradouro" 
                                placeholder="Endereço"
                                value={address.logradouro}
                                disabled 
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="bairro">Bairro</label>
                            <input 
                                type="text" 
                                id="bairro" 
                                placeholder="Bairro"
                                value={address.bairro}
                                disabled 
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="cidade">Cidade</label>
                            <input 
                                type="text" 
                                id="cidade" 
                                placeholder="Cidade"
                                value={address.cidade}
                                disabled 
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="uf">Estado</label>
                            <input 
                                type="text" 
                                id="uf" 
                                placeholder="Estado"
                                value={address.uf}
                                disabled 
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
