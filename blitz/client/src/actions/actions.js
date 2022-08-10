import axios from "axios";


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
/* const data = new FormData();
    data.append("name", name);
    data.append("file", file);
    console.log(data)
    Axios.post("http://localhost:3001/customers", data)
      .then(res => console.log(res))
      .catch(err => console.log(err)); */
  