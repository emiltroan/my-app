import logo from './logo.svg';
import './App.css';
import {Header} from "./Header.js"
import Container from 'react-bootstrap/Container';
import React, {useState} from "react";
import {Form} from "react-bootstrap"; 

function App() {

  const [number, setNumber] = useState("hei");

  return (
    <div className="App">
      <Header />
      <Container>
        {number}

        <Form.Control onChange={(e)=>{setNumber(e.target.value)}} />
      </Container>
    </div>
  );
}

export default App;