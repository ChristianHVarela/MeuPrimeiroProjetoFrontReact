import ApiService from "../api";

class UsuarioService extends ApiService{

    constructor(){
        super('/api/usuarios')
    } 

    autenticar(object){
        return this.post('/autenticar', object)
    }

}

export default UsuarioService