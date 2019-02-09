import {http} from './config'

export default {
    listar:(rota) =>{
        return http.get(rota)
    }
}