import React from "react";
import Button from "../Component/button";
import Card from "../Component/Card";
import FormGroup from "../Component/formGroup";
import Input from "../Component/input"

class CadastroUsuario extends React.Component{

    state = {
        nome: "",
        email: "",
        senha: null,
        senha2: null
    }

    teste = () => {
        console.log(this.state);
        
    }

    render(){
        return(
            <div className="container">
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
                                    <Button color="btn btn-success" click={this.teste}>Salvar</Button>
                                    <Button color="btn btn-danger" style={{marginLeft: '10px'}}>Voltar</Button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }

}

export default CadastroUsuario