import { Children, createContext, useContext, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ Children }) =>{
    const [ token, setToken] = useState(localStorage.getItem(token))
    const login = async(email, password, navigate) =>{
        try{
            const res = await api.post("/auth/login", {email, password});
            localStorage.setItem("token", res.data.token);
            navigate("/itens"); //redireciona após Login
        }catch(err){
            alert(err.response?.data?.msg || "Erro no login");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout}}>
            { Children }
        </AuthContext.Provider>
    )
}