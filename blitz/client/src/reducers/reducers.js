import { GET_SELLS } from "../actions/actions";  
const initalState = {
    sells : []
}
export default function rootReducer (state = initalState , {payload , type} ){
    switch (type) {
        case GET_SELLS :
            const sell =  payload
            const pars = sell.map(e => {
               
                    e.replace(/\s/g, "")
                
            })
            console.log(pars)
            console.log(state.sells) 

        return {...state , sells :payload} 
        default:
            return state;
    }
} 