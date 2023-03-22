import {Header} from "./Header.js"
import Container from 'react-bootstrap/Container';
import React, {useState} from "react";
import {Form} from "react-bootstrap"; 
import {Slots} from "./Slots.js";
import "./App.css";
function App() {

  const [number, setNumber] = useState("hei");

  return (
    <div className="App">
      <Header />
      <Container>
        <Slots /> 
        <br />

      </Container>
    </div>
  );
}

export default App;