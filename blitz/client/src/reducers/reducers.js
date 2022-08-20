 import { GET_SELLS , FILTER_SELLS} from "../actions/actions";  
const initalState = {
    sells : [],
    obje : []
}
export default function rootReducer (state = initalState , {payload , type} ){
    switch (type) {
        case GET_SELLS :
            const sell =  payload
        return {...state , sells :sell , obje : sell} 
        case FILTER_SELLS : 
        const total =  state.obje
        console.log(total)
        const paypay = payload.toLowerCase()
      
        const top =
        total.filter((e , i)=> { 
          for (let v in e ){
            if (v.toLowerCase().includes(paypay) === true ) return e     }
          //split
        })
        console.log(top)
        return {...state , sells :top }
            
           
     
            
               
             
    

    

           
        default:
            return state;
    }
} 