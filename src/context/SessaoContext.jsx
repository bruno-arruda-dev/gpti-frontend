import { createContext, useState } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {

    const [ usuarioSessao, setUsuarioSessao ] = useState("");
    const [ empresaSessao, setEmpresaSessao ] = useState("");
    const [ empresasSessao, setEmpresasSessao ] = useState([]);
    const [ isLogado, setIsLogado ] = useState(false);

    return(
        <SessionContext.Provider value={{

            usuarioSessao,  setUsuarioSessao,
            empresaSessao,  setEmpresaSessao,
            empresasSessao, setEmpresasSessao,
            isLogado,       setIsLogado

        }}> { children } </SessionContext.Provider>
    )
}