import React from "react";
import Card from "../Component/Card";
import formGroup from "../Component/formGroup"
import Button from "../Component/button"
import {withRouter} from 'react-router-dom'
import UsuarioService from "../app/service/usuarioService";
import LocalStorageService from "../app/service/localStorageService";
import {messageError} from '../Component/toastr'

class Login extends React.Component{


    state = {
        email: "",
        senha: "",
        mensagemErro: null
    }

    constructor(){
        super()
        this.service = new UsuarioService();
    }

    cadastro = () => {
        console.log(this.state);
        this.props.history.push('/cadastro-usuario')
    }

    entrar = async () => {
        this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha
        }).then(response => {
            LocalStorageService.addItem('usuario_logado', response.data)
            this.props.history.push("/home")
        }).catch(erro => {
            messageError(erro.response.data)
        })

    }



    render(){
        return(
            <div className="row">
                    <div className="col-md-6" style={{position: 'relative', left: '300px'}}>
                        <Card title="Login">
                            <div className="row">
                                {this.state.mensagemErro}
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <form>
                                            <fieldset>
                                                <formGroup>
                                                    <label>Email: *</label>
                                                    <input className="form-control" type="email" aria-describedby="emailHelp" placeholder="Digite o Email"
                                                         onChange={(e) => this.setState({email: e.target.value})} />
                                                </formGroup>
                                                <br />
                                                <formGroup>
                                                    <label>Senha: *</label>
                                                    <input className="form-control" type="password" aria-describedby="senhaHelp" placeholder="Digite sua senha"
                                                        onChange={(e) => this.setState({senha: e.target.value})} />
                                                </formGroup>
                                                <br />
                                                <Button color="btn btn-success" click={this.entrar}>Entrar</Button>
                                                <button class="btn btn-danger" style={{marginLeft: '10px'}} type="button" onClick={this.cadastro}>Cadastrar Usu??rio</button>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            )
    }

}

export default Login