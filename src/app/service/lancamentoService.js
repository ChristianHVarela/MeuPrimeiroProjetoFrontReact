import React from "react";
import ApiService from "../api";

export default class LancamentoService extends ApiService{

    constructor(){
        super('/api/lancamentos')
    }

    getMeses(){
        return [
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
    }

    getTipos(){
        return [
            {key: 'SELECIONE...', val: ''},
            {key: 'DESPESA', val: 'DESPESA'},
            {key: 'RECEITA', val: 'RECEITA'}
        ]
    }

    consultar(Filtro){
        let parameters = `/buscar?usuario=${Filtro.idUsuario}`

        if(Filtro.descricao){
            parameters = `${parameters}&descricao=${Filtro.descricao}`
        }
        if(Filtro.mes){
            parameters = `${parameters}&mes=${Filtro.mes}`
        }
        if(Filtro.ano){
            parameters = `${parameters}&ano=${Filtro.ano}`
        }
        if(Filtro.tipo){
            parameters = `${parameters}&tipo=${Filtro.tipo}`
        }
        return this.get(parameters)
    }

    deletar(id){
        let parameters = `/delete/${id}`
        return this.delete(parameters)
    }
}