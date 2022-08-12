 import { GET_SELLS , FILTER_SELLS} from "../actions/actions";  
const initalState = {
    sells : []
}
export default function rootReducer (state = initalState , {payload , type} ){
    switch (type) {
        case GET_SELLS :
            const sell =  payload
            const go = []
            var w = []
            //hacer una mejor visibilidad de los pididos
            
            const look = sell.map(e => {
                w.push(Object.entries(e))
    })
            /* console.log(Object.entries(sell))
            console.log(w)
            console.log(go)
            console.log(look) */
         
        return {...state , sells :w} 
        case FILTER_SELLS : 
        const total =  state.sells
        const paypay = payload
       var star =  total.filter(e => e.includes(paypay))
            console.log(star)
        default:
            return state;
    }
} 