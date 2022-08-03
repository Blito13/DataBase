import logo from './logo.svg';
import { Provider } from "react-redux";
import Start from "./components/Start";
import './App.css';
import generateStore from "./store";
import { Route, Routes } from 'react-router-dom';
function App() {
  const store = generateStore();
  return(
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Start />}/>

        



      </Routes>
      </Provider>
  )
}

export default App;
