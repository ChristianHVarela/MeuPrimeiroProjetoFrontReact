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
import {messageError} from "../Component/toastr"


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

    validarCampos(){
        let msg = []
        if(!this.state.ano){
            msg.push('Insira um ano para continuar!')
        }
        return msg
    }

    buscar = () => {
        const msgs = this.validarCampos()
        if(msgs && msgs.length > 0){
            msgs.forEach((msg, index) =>{
                messageError(msg)
            });
            return false;
        }
        
        const usuarioLogado = LocalStorageService.getItem('usuario_logado')
        const filtro = {
            descricao: this.state.descricao,
            mes: this.state.mes,
            ano: this.state.ano,
            tipo: this.state.tipo,
            idUsuario: usuarioLogado.id
        }

        this.service.consultar(filtro)
            .then(resposta =>{
                this.setState({lancamentos: resposta.data})
            }).catch(error =>{
                messageError(error.reposta)
            })
    }


    render(){

        const months = this.service.getMeses()
        const types = this.service.getTipos()


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