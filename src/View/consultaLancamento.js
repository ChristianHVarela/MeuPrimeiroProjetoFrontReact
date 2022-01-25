import React from "react";
import Button from "../Component/button";
import {} from 'react-router-dom'
import Card from "../Component/Card";
import FormGroup from "../Component/formGroup";
import Input from "../Component/input";
import SelectMenu from "../Component/selectMenu";
import LancamentoTable from "./Lancamento/lancamentoTable";
import LancamentoService from "../app/service/lancamentoService";
import LocalStorageService from "../app/service/localStorageService";

class ConsultaLancamento extends React.Component{

    state ={
        idUsuario: '',
        descricao: '',
        mes: '',
        ano: '',
        tipo: '',
        lancamentos: []
    }

    constructor(){
        super()
        this.service = new LancamentoService()
    }

    buscar = () => {
        const usuarioLogado = LocalStorageService.getItem('usuario_logado')
        this.setState({idUsuario: usuarioLogado.id})
        console.log(usuarioLogado)
        console.log(this.state)
    }


    render(){

        const months = [
            {key: 'SELECIONE...', val: ''},
            {key: 'JANEIRO', val: 1},
            {key: 'FEVEREIRO', val: 2},
            {key: 'MARÇO', val: 3},
            {key: 'ABRIL', val: 4},
            {key: 'MAIO', val: 5},
            {key: 'JUNHO', val: 6},
            {key: 'JULHO', val: 7},
            {key: 'AGOSTO', val: 8},
            {key: 'SETEMBRO', val: 9},
            {key: 'OUTUBRO', val: 10},
            {key: 'NOVEMBRO', val: 11},
            {key: 'DEZEMBRO', val: 12}  
        ]
        const types = [
            {key: 'SELECIONE...', val: ''},
            {key: 'DESPESA', val: 'DESPESA'},
            {key: 'RECEITA', val: 'RECEITA'}
        ]


        return(
            <Card title="Consulta Lançamentos">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="bs-component">
                            <form>
                                <fieldset>
                                    <FormGroup>
                                        <Input label="Ano: *" type="text" id="anoInput" value={this.state.ano} change={e => this.setState({ano: e.target.value})}
                                            aria="anoHelp" placeholder="Digite o Ano" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input label="Descrição: *" type="text" id="descricaoInput" value={this.state.descricao} change={e => this.setState({descricao: e.target.value})}
                                            aria="descricaoHelp" placeholder="Digite a descrição" />
                                    </FormGroup>
                                    <FormGroup>
                                        <label style={{marginTop: '2px'}}>Mês: *</label>
                                        <SelectMenu id="mesSelect" className="form-control" lista={months} value={this.state.mes} onChange={e => this.setState({mes: e.target.value})} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label style={{marginTop: '2px'}}>Tipo: *</label>
                                        <SelectMenu id="tipoSelect" className="form-control" lista={types} value={this.state.tipo} onChange={e => this.setState({tipo: e.target.value})} />
                                    </FormGroup>
                                    <FormGroup style={{marginTop: '10px'}}>
                                        <Button type="button" color="btn btn-success" click={this.buscar}>Buscar</Button>
                                        <Button type="button" color="btn btn-danger" style={{marginLeft: '5px'}}>Cadastrar</Button>
                                    </FormGroup>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12" style={{marginTop: '25px'}}>
                        <LancamentoTable Lancamentos={this.state.lancamentos} />
                    </div>
                </div>
            </Card>
            
        )
    }

}

export default ConsultaLancamento