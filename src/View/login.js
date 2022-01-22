import React from "react";
import Card from "../Component/Card";
import formGroup from "../Component/formGroup"
import Button from "../Component/button"

class Login extends React.Component{


    state = {
        email: "",
        senha: ""
    }

    cadastro = () => {
        console.log("Email: " + this.state.email);
        console.log("Senha: " + this.state.senha);
    }


    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{position: 'relative', left: '300px'}}>
                        <Card title="Login">
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
                                                <Button color="btn btn-success">Entrar</Button>
                                                <button class="btn btn-danger" style={{marginLeft: '10px'}} type="button" onClick={this.cadastro}>Cadastrar Usuário</button>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login