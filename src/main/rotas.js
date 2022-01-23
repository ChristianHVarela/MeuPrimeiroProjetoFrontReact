import React from "react";
import Login from "../View/login";
import CadastroUsuario from "../View/cadastroUsuario";
import Home from '../View/home'

import {Route, Switch, HashRouter} from 'react-router-dom'

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuario" component={CadastroUsuario} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas