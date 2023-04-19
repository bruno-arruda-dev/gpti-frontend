import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Principal from "../pages/Principal/Principal";
import Contatos from "../pages/Contatos/Contatos";
import Produtos from "../pages/Produtos/Produtos";

const Rotas = () => (

    <Routes>

        <Route  exact path='/'
                element={ <Login /> } 
        />
        <Route  path='/Principal'
                element={ <Principal /> }
        />
        <Route  path='/Contatos'
                element={ <Contatos /> }
        />
        <Route  path='/Produtos'
                element={ <Produtos /> }
        />

    </Routes>

)

export default Rotas;