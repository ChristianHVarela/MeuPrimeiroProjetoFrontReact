import React from "react";

function LancamentoTable(props){

    const Lancamentos = props.Lancamentos.map(option =>{
        return(
            <tr key={option.id}>
                <th>{option.descricao}</th>
                <th>{option.valor}</th>
                <th>{option.tipo}</th>
                <th>{option.mes}</th>
                <th>{option.status}</th>
                <th></th>
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