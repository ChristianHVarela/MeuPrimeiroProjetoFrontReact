import React from "react";
import ApiService from "../api";

export default class LancamentoService extends ApiService{

    constructor(){
        super('/api/lancamentos')
    }

    consultar(Filtro){
        let parameters = `/busca?idUsuário=${Filtro.idUsuario}`

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
}