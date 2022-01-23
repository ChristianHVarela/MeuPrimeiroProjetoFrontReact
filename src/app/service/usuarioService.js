import ApiService from "../api";

class UsuarioService extends ApiService{

    constructor(){
        super('/api/usuarios')
    } 

    autenticar(object){
        return this.post('/autenticar', object)
    }

    conferirSaldo(id){
        return this.get(`/saldo/${id}`)
    }

}

export default UsuarioService