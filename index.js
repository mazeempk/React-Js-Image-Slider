import React , { useState } from 'react';
 import ReactDOM from 'react-dom';
 import { BsFillCaretLeftFill } from "react-icons/bs";
 import { BsFillCaretRightFill } from "react-icons/bs";
import './styles.css';
 import { arr } from './data';


const App = () =>{
    const [value, setValue] = useState(0);
    
    return(
    <>
    <div className="container">
      <img src = {arr[value].image} alt={arr[value].id}/>
      <h1>{arr[value].name}  </h1>
      <div>
      <button type="button" onClick={() => value === 0 ? setValue(3) : setValue(value - 1)}><BsFillCaretLeftFill /></button>
      <button type="button" onClick={() => value === 3 ? setValue(0) : setValue(value + 1)}><BsFillCaretRightFill /></button>
        
      </div>
    </div>
    </>
    );
  }
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );