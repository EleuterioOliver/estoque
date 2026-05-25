import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../context/Register";
import Itens from "../pages/Itens";
import Movimentacoes from "../pages/Movimentacoes";
import NavBar from "../components/NavBar";
import Devolucao from "../pages/Devolucao";
import Retirada from "../pages/Retirar";
import { Dashboard } from "../pages/Dashboard";
import { useAuth } from "../context/AuthContext";

function Private({ children }){
    const { token } = useAuth();
    return token ? children : <Navigate to={"/"} replace />;
}

export default function AppRoutes(){
    return(
        <BrowserRouter>
            {/* Rota da navBar */}
            <NavBar />

            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route
                path="/itens"
                element={
                    <Private>
                        <Itens/>
                    </Private>
                }/>
            <Route
                path="/movimentacoes"
                element={
                    <Private>
                        <Movimentacoes/>
                    </Private>
                }/>
            <Route
                path="/dashboard"
                element={
                    <Private>
                        <Dashboard />
                    </Private>
                }
            />
            <Route
                path="/retirar"
                element={
                    <Private>
                        <Retirada/>
                    </Private>
                }
            />
            <Route
                path="/devolver"
                element={
                    <Private>
                        <Devolucao/>
                    </Private>
                }
            />    
            </Routes>
        </BrowserRouter>
    );
}