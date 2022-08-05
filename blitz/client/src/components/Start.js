
import React, { useState } from "react";

import "./start.css";
import Axios from "axios";

function Start() {
  const [name, setName] = useState();
  const [file, setFile] = useState();
  const send = event => {
    const data = new FormData();
    data.append("name", name);
    data.append("file", file);
    console.log(data)
    Axios.post("http://localhost:3001/customers", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <form action="#">
          <div className="flex">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={event => {
                const { value } = event.target;
                setName(value);
              }}
            />
          </div>
          <div className="flex">
            <label htmlFor="file">File</label>
            <input
              type="file"
              id="file"
              accept=".xlsx"
              onChange={event => {
                const file = event.target.files[0];
                setFile(file);
              }}
            />
          </div>
        </form>
        <button onClick={send}>Send</button>
      </header>
    </div>
  );
}

export default Start;