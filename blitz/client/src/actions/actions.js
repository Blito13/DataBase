import axios from "axios";


export  function postPath  (payload) {
    return async  function(dispatch){
        console.log(payload)
        try{
            const data = new FormData()
            data.append('file',payload)
            const exel = axios.post('http://localhost:3001/customers',data,{} )
            
            return exel
        } catch(error) { console.log(error)}
    }
}