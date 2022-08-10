
import React, { useState , } from "react";
import {useSelector, useDispatch} from 'react-redux'
import styles from "./Start.module.css";
import { postPath ,getCustomers } from "../actions/actions";
import Axios from "axios";

function Start() {
  
  const sells = useSelector(state => state.sells)
  console.log(sells)
  const [name, setName] = useState();
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const set = (e) => {
    e.preventDefault(e);
    const file = e.target.files[0];
    setFile(file)
    console.log(file)
  }
  const getData = () => {
    dispatch(getCustomers())
  }
  const send = () => {
    dispatch(postPath(file))
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
              accept=".xlsx"
              onChange={e => set(e)}
            />
          </div>
        </form>
        <button className={styles.button} onClick={send}>Send</button>
        <button className={styles.button} onClick={getData}>getData</button>
      <div>

        <h1>list</h1>
       {sells? sells.map((e , i ) => 
        <div key = {i}>

      
       <div>{e[i]}</div>
                       
        </div>
) : 

<label>Nothing ":O"</label>  }

      </div>
      </header>
    </div>
  );
}

export default Start;