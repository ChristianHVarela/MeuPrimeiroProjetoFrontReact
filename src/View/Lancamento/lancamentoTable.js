import React from "react";
import currencyFormatter from "currency-formatter";


function LancamentoTable(props){

    const Lancamentos = props.Lancamentos.map(option =>{
        return(
            <tr key={option.id}>
                <th>{option.descricao}</th>
                <th>{currencyFormatter.format(option.valor, {locale: 'pt-br'})}</th>
                <th>{option.tipo}</th>
                <th>{option.mes}</th>
                <th>{option.status}</th>
                <th> 
                    <button className="btn btn-primary" type="button" style={{marginRight: '4px'}} onClick={e => props.editarAction(option.id)} >Editar</button>
                    <button className="btn btn-danger" type="button" onClick={e => props.abrirConfirmacao(option)} >Excluir</button>
                </th>
            </tr>
        )
    })




    return(
        <div className="bs-component">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Descrição</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Mês</th>
                        <th scope="col">Situação</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {Lancamentos}
                </tbody>
            </table>
        </div>
    )
}

export default LancamentoTable