import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Dashboard from "./pages/dashboard";
import InscricaoVaga from "./pages/inscricaoVaga";
import VagasInscritas from "./pages/vagasInscritas";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/inscricao" element={<InscricaoVaga />} />
                <Route path="/inscritas" element={<VagasInscritas />} />


            </Routes>
        </Router>
    );
}

export default App;
