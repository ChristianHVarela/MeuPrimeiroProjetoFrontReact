import React from "react";
import Button from "../Component/button";
import Card from "../Component/Card";
import FormGroup from "../Component/formGroup";
import Input from "../Component/input";
import SelectMenu from "../Component/selectMenu";


class ConsultaLancamento extends React.Component{


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
                                        <Input label="Ano: *" type="text" id="anoInput" 
                                            aria="anoHelp" placeholder="Digite o Ano" />
                                    </FormGroup>
                                    <FormGroup>
                                        <label style={{marginTop: '2px'}}>Mês: *</label>
                                        <SelectMenu className="form-control" lista={months} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label style={{marginTop: '2px'}}>Tipo: *</label>
                                        <SelectMenu className="form-control" lista={types} />
                                    </FormGroup>
                                    <FormGroup style={{marginTop: '10px'}}>
                                        <Button type="button" color="btn btn-success">Buscar</Button>
                                        <Button type="button" color="btn btn-danger" style={{marginLeft: '5px'}}>Cadastrar</Button>
                                    </FormGroup>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }

}

export default ConsultaLancamento