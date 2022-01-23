import React from "react";
import {withRouter} from 'react-router-dom'
import axios from "axios";

class Home extends React.Component{

    

    state = {
        saldo: 0
    }

    cadastrar = () => {
        this.props.history.push('/cadastro-usuario')
    }

    componentDidMount(){
        const usuarioLogadoString = localStorage.getItem('usuario_logado')
        const usuarioLogado = JSON.parse(usuarioLogadoString)

        axios.get(`http://localhost:8080/api/usuarios/saldo/${usuarioLogado.id}`)
            .then(response => {
                this.setState({saldo: response.data})
            }).catch(error =>{
                console.error(error.response)
            });
    }

    render(){
        return(
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo}</p>
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                    <a onClick={this.cadastrar} className="btn btn-primary btn-lg" role="button"><i className="fa fa-users"></i>  Cadastrar Usuário</a>
                    <a style={{marginLeft: '10px'}} className="btn btn-danger btn-lg" role="button"><i class="fa fa-users"></i>  Cadastrar Lançamento</a>
                </p>
            </div>
        )
    }

}

export default Home