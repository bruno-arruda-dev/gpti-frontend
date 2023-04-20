import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Principal from "../pages/Principal/Principal";
import Contatos from "../pages/Contatos/Contatos";
import Produtos from "../pages/Produtos/Produtos";
import Vendas from "../pages/Vendas/Vendas";
import Financeiro from "../pages/Financeiro/Financeiro";
import Relatorios from "../pages/Relatorios/Relatorios";
import Sistema from "../pages/Sistema/Sistema";

const Rotas = () => (

        <Routes>

                <Route exact path='/'
                        element={<Login />}
                />
                <Route path='/Principal'
                        element={<Principal />}
                />
                <Route path='/Contatos'
                        element={<Contatos />}
                />
                <Route path='/Vendas'
                        element={<Vendas />}
                />
                <Route path='/Produtos'
                        element={<Produtos />}
                />
                <Route path='/Financeiro'
                        element={<Financeiro />}
                />
                <Route path='/Relatorios'
                        element={<Relatorios />}
                />
                <Route path='/Sistema'
                        element={<Sistema />}
                />

        </Routes>

)

export default Rotas;