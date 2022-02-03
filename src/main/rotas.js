import React from "react";
import Login from "../View/login";
import CadastroUsuario from "../View/cadastroUsuario";
import Home from '../View/home'
import ConsultaLancamento from '../View/consultaLancamento'

import {Route, Switch, HashRouter} from 'react-router-dom'
import cadastroLancamento from "../View/Lancamento/cadastroLancamento";

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/consulta-lancamento" component={ConsultaLancamento} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuario" component={CadastroUsuario} />
                <Route path="/cadastro-lancamento" component={cadastroLancamento} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas