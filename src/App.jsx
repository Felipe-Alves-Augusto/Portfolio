import React from "react";
import Menu from "./components/Menu";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

const App = () => {

  return (
      <React.Fragment>
        <Menu></Menu>
        <Container>
          <Home></Home>
          <About></About>
          <Portfolio></Portfolio>
          <Expertise></Expertise>
          <Skills></Skills>
          
        </Container>
      </React.Fragment>
      
  )

}


export default App
