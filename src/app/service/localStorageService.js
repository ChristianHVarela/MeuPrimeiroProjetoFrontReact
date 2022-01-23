export default class LocalStorageService{

    static addItem(key, val){
       return localStorage.setItem(key, JSON.stringify(val))
    }

    static getItem(key){
        const item = localStorage.getItem(key)
        return JSON.parse(item)
    }

}