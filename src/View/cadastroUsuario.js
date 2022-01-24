import React from "react";
import Button from "../Component/button";
import Card from "../Component/Card";
import FormGroup from "../Component/formGroup";
import Input from "../Component/input"
import {withRouter} from 'react-router-dom'
import UsuarioService from "../app/service/usuarioService";
import LocalStorageService from "../app/service/localStorageService";
import {messageSuccess, messageError} from '../Component/toastr'

class CadastroUsuario extends React.Component{

    state = {
        nome: "",
        email: "",
        senha: null,
        senha2: null
    }

    constructor(){
        super()
        this.service = new UsuarioService()
    }

    validar(){
        const msgs = []
        if(!this.state.nome){
            msgs.push('O campo Nome é obrigatório.')
        }
        if(!this.state.email){
            msgs.push('O campo Email é obrigatório.')
        } else if(!this.state.email.match(/^[a-z0-9]+@[a-z0-9]+\.[a-z]/)){
            msgs.push('Informe um email valido.')
        } 
        if(!this.state.senha || !this.state.senha2){
            msgs.push('Digite a senha e confirme a mesma.')
        } else if(this.state.senha !== this.state.senha2){
            msgs.push('As senhas não batem')
        }
        return msgs
    }

    cadastroUsuario = () => {
        const msgs = this.validar()

        if(msgs && msgs.length > 0){
            msgs.forEach((msg, index) =>{
                messageError(msg)
            });
            return false;
        }

        const usuario = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        }
        this.service.salvar(usuario)
            .then(response => {
                LocalStorageService.addItem('usuario_cadastrado', response.data)
                this.props.history.push('/login')
                messageSuccess('Usuário cadastrado com sucesso!')
            }).catch( error =>{
                messageError(error.response.data)
            })
    }

    cancelar = () => {
        this.props.history.push('/login')
    }

    render(){
        return(
            <Card title="Cadastro de Usuário">
                    <div className="row">
                        <div className="col-lg-12">
                            <form>
                                <fieldset>
                                    <FormGroup>
                                        <Input label="Nome: *" type="text" id="inputNome" aria="nomeHelp" placeholder="Digite seu nome" change={(e) => 
                                            this.setState({nome: e.target.value})} />
                                    </FormGroup>
                                    <br />
                                    <FormGroup>
                                        <Input label="Email: *" type="text" id="inputEmail" aria="emailHelp" placeholder="Digite seu email"
                                         change={(e) =>  this.setState({email: e.target.value})} />
                                        <small id="emailHelp" className="form-text text-muted">Não divulgamos o seu email.</small>
                                    </FormGroup>
                                    <br />
                                    <FormGroup>
                                        <Input label="Senha: *" type="password" id="inputSenha" aria="senhaHelp" placeholder="Digite sua senha"
                                        change={(e) =>  this.setState({senha: e.target.value})}  />
                                    </FormGroup>
                                    <br />
                                    <FormGroup>
                                        <Input label="Confirme a senha: *" type="password" id="inputSenhaAgain" aria="senhaAgainHelp" placeholder="Digite sua senha novamente"
                                        change={(e) =>  this.setState({senha2: e.target.value})}  />
                                    </FormGroup>
                                    <br />
                                    <Button color="btn btn-success" click={this.cadastroUsuario}>Salvar</Button>
                                    <Button click={this.cancelar} color="btn btn-danger" style={{marginLeft: '10px'}}>Voltar</Button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </Card>
            )
    }

}

export default CadastroUsuario