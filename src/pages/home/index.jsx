import "./home.css"
import MapView from "../../components/MapView"
function Home() {
    return (   
    <body>
        <div className="navbar">
            <div className="logo">JobFinder</div>
            <div className="nav-links">
                <a href="#home">Início</a>
                <a href="login.html">Login</a>
                <a href="inscricao.html">Inscreva-se</a>
            </div>
        </div>

        <div className="container">
            <div className="search-bar">
                <input type="text" placeholder="Buscar vagas..." />
                <button className="btn-search">Pesquisar</button>
            </div>
            <div className="column-wrapper">
                <div className="job-cards">
                    <div className="job-card">
                        <h3>Desenvolvedor Front-End</h3>
                        <p><i className='bx bxs-map'></i> São Paulo, SP</p>
                        <p><i className='bx bx-money'></i> R$6.000/mês</p>
                    </div>
                    <div className="job-card">
                        <h3>Analista de Dados</h3>
                        <p><i className='bx bxs-map'></i> Belo Horizonte, MG</p>
                        <p><i className='bx bx-money'></i> R$5.500/mês</p>
                    </div>
                    <div className="job-card">
                        <h3>Engenheiro de Software</h3>
                        <p><i className='bx bxs-map'></i> Rio de Janeiro, RJ</p>
                        <p><i className='bx bx-money'></i> R$8.000/mês</p>
                    </div>
                    <div className="job-card">
                        <h3>Desenvolvedor Front-End</h3>
                        <p><i className='bx bxs-map'></i> São Paulo, SP</p>
                        <p><i className='bx bx-money'></i> R$6.000/mês</p>
                    </div>
                    <div className="job-card">
                        <h3>Analista de Dados</h3>
                        <p><i className='bx bxs-map'></i> Belo Horizonte, MG</p>
                        <p><i className='bx bx-money'></i> R$5.500/mês</p>
                    </div>
                    <div className="job-card">
                        <h3>Engenheiro de Software</h3>
                        <p><i className='bx bxs-map'></i> Rio de Janeiro, RJ</p>
                        <p><i className='bx bx-money'></i> R$8.000/mês</p>
                    </div>
                    <div className="job-card">
                        <h3>Desenvolvedor Front-End</h3>
                        <p><i className='bx bxs-map'></i> São Paulo, SP</p>
                        <p><i className='bx bx-money'></i> R$6.000/mês</p>
                    </div>
                    <div className="job-card">
                        <h3>Analista de Dados</h3>
                        <p><i className='bx bxs-map'></i> Belo Horizonte, MG</p>
                        <p><i className='bx bx-money'></i> R$5.500/mês</p>
                    </div>
                    <div className="job-card">
                        <h3>Engenheiro de Software</h3>
                        <p><i className='bx bxs-map'></i> Rio de Janeiro, RJ</p>
                        <p><i className='bx bx-money'></i> R$8.000/mês</p>
                    </div>
                    <div className="job-card">
                        <h3>Desenvolvedor Front-End</h3>
                        <p><i className='bx bxs-map'></i> São Paulo, SP</p>
                        <p><i className='bx bx-money'></i> R$6.000/mês</p>
                    </div>
                    <div className="job-card">
                        <h3>Analista de Dados</h3>
                        <p><i className='bx bxs-map'></i> Belo Horizonte, MG</p>
                        <p><i className='bx bx-money'></i> R$5.500/mês</p>
                    </div>
                    <div className="job-card">
                        <h3>Engenheiro de Software</h3>
                        <p><i className='bx bxs-map'></i> Rio de Janeiro, RJ</p>
                        <p><i className='bx bx-money'></i> R$8.000/mês</p>
                    </div>
                </div>
                <div className="map-column">
                    <h2>Encontre empresas perto de você</h2>
                    <MapView className="map"/>
                </div>
            </div>
        </div>
    </body>
    )
}

export default Home