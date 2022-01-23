import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

class ApiService {

    constructor(apiUrl){
        this.apiUrl = apiUrl;
    }

    post(url, object){
        return api.post(url, object);
    }

    get(url){
        return api.get(url);
    }

    put(url, object){
        return api.put(url, object);
    }

    delete(url){
        return api.delete(url);
    }
}

export default ApiService