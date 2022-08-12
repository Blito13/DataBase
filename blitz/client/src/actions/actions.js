import axios from "axios";
export const GET_SELLS = "GET_SELLS"
export const FILTER_SELLS = "FILTER_SELLS"

export  function postPath  (payload) {
    return async  function(dispatch){
        console.log(payload)
        const file = payload;
        try{
            const data = new FormData()
            data.append('file',file)
            const exel = axios.post('http://localhost:3001/customers',data)
            
            
        } catch(error) { console.log(error)}
    }
}
export function filterSells(payload) {
    return async function (dispatch) {
     
      console.log(payload)
      return await dispatch({
        type: "FILTER_SELLS",
        payload
      });
    };
  }
export function getCustomers(payload) {
    return async function (dispatch) {
      var json = await axios.get("http://localhost:3001/customers");
      console.log(json.data)
      return dispatch({
        type: "GET_SELLS",
        payload: json.data,
      });
    };
  }