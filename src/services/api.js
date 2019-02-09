import {http} from './config'

export default {
    buscar:(rota) =>{
        return http.get(rota)
    }
}