import React from "react";
import { withRouter } from "react-router-dom";
import LancamentoService from "../../app/service/lancamentoService";
import Card from "../../Component/Card";
import FormGroup from "../../Component/formGroup";
import Input from "../../Component/input";
import SelectMenu from "../../Component/selectMenu";


class CadastroLancamento extends React.Component{

    state =  {
        descricao: '',
        mes: '',
        ano: '',
        valor: 0,
        usuario: null,
        tipo: '',
        status: ''
    }

    constructor(){
        super()
        this.service = new LancamentoService()
    }



    render(){
        const months = this.service.getMeses()
        const types = this.service.getTipos()
        const status = this.service.getStatus()

        return(
            <Card>
                <div className="row">
                    <div className="col-md-6">
                        <FormGroup>
                            <Input label="Descrição: *" type="text" id="inputDescricao" aria="descricaoHelp" placeholder="Digite seu descrição" change={(e) => 
                                            this.setState({descricao: e.target.value})} value={this.state.descricao} />
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <FormGroup>
                            <Input label="Ano: *" type="text" id="inputAno" aria="anoHelp" placeholder="Digite o ano" change={(e) => 
                                                this.setState({ano: e.target.value})} value={this.state.ano} />
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <FormGroup>
                            <label style={{marginTop: '2px'}}>Mês: *</label>
                            <SelectMenu id="mesSelect" className="form-control" lista={months} value={this.state.mes} onChange={e => this.setState({mes: e.target.value})} />
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <FormGroup>
                            <label style={{marginTop: '2px'}}>Tipo: *</label>
                            <SelectMenu id="tipoSelect" className="form-control" lista={types} value={this.state.tipo} onChange={e => this.setState({tipo: e.target.value})} />
                        </FormGroup>
                    </div>
                    <div className="col-sm-6">
                        <FormGroup>
                            <Input label="Valor: *" type="text" id="inputValor" aria="valorHelp" placeholder="Digite o valor" change={(e) => 
                                                this.setState({valor: e.target.value})} value={this.state.valor} />
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <FormGroup>
                            <label style={{marginTop: '2px'}}>Status: *</label>
                            <SelectMenu id="tipoSelect" className="form-control" lista={status} value={this.state.status} onChange={e => this.setState({status: e.target.value})} />
                        </FormGroup>
                    </div>
                 </div>
            </Card>
        )
    }
}

export default withRouter(CadastroLancamento)