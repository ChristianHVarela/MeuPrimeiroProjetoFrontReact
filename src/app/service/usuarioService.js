import ApiService from "../api";

class UsuarioService extends ApiService{

    constructor(){
        super('/api/usuarios')
    } 

}

export default UsuarioService