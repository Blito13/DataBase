
import React, { useState , } from "react";
import {useSelector, useDispatch} from 'react-redux'
import styles from "./Start.module.css";
import { postPath } from "../actions/actions";
import Axios from "axios";

function Start() {
  const [name, setName] = useState();
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const set = (e) => {
    e.preventDefault(e);
    const file = e.target.files[0];
    setFile(file)
    console.log(file)
  }

  const send = event => {
    dispatch(postPath(file))
   /*  const data = new FormData();
    data.append("name", name);
    data.append("file", file);
    console.log(data)
    Axios.post("http://localhost:3001/customers", data)
      .then(res => console.log(res))
      .catch(err => console.log(err)); */
  };

  return (
    <div className={styles.background}>
      <header className={styles.background}>
        <form className={styles.background} >
          {/* <div className={styles.flex}>
            <label >Name</label>
            <input className={styles.background}
              type="text"
              id="name"
              onChange={event => {
                const { value } = event.target;
                setName(value);
              }}
            />
          </div> */}
          <div className={styles.input}>
            <label htmlFor="file">File</label>
            <input className={styles.input}
              type="file"
              id="file"
              accept=".xlsx"
              onChange={e => set(e)}
              /* onChange={event => {
                const file = event.target.files[0];
                setFile(file);
              }} */
            />
          </div>
        </form>
        <button className={styles.button} onClick={send}>Send</button>
      </header>
    </div>
  );
}

export default Start;