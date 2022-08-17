
import React, { useState , } from "react";
import {useSelector, useDispatch} from 'react-redux'
import styles from "./Start.module.css";
import { postPath ,getCustomers  ,filterSells } from "../actions/actions";
import Axios from "axios";

function Start() {
  
  const sells = useSelector(state => state.sells)
  const filts = useSelector(state => state.obje)
  console.log(sells)
  const [name, setName] = useState();
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const set = (e) => {
    e.preventDefault();
    const {name , value  , files} = e.target
    if(name === 'file'){
      const file = files[0];
      setFile(file)
      console.log(file)
      dispatch(postPath(file))
    }
    if(name === 'search'){
      setName(value)
      console.log(value)
      /*   */
    }
  }
  const getData = () => {
    dispatch(getCustomers())
    
  }
  const send = () => {
    dispatch(filterSells(name))
  };

  return (
    <div className={styles}>
      <header className={styles}>
        <form className={styles} >
          <div className={styles.input}>
            <label htmlFor="file">File</label>
            <input className={styles.input}
              type="file"
              id="file"
              name = "file"
              accept=".xlsx"
              onChange={e => set(e)}
            />
          </div>
        </form>
        
        <button className={styles.button} onClick={getData}>getData</button>
        <input name = 'search' onChange={e => set (e)} ></input>
        <button className={styles.button}onClick={send} >search</button>
      <div>

        <h1>list</h1>
       {sells? sells.map((e ,i )=> 
      <div>
       <form>
         <span>{Object.entries(e)}</span>
          <br></br>
       </form>
      </div>    
) : 
<label>Nothing ":O"</label>  }

      </div>
      
      </header>
    </div>
  );
}

export default Start;