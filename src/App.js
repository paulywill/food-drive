import React, { Component } from 'react';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import GraphicTest from './components/layout/GraphicTest';
import MainForm from './components/MainForm';
import { Container } from 'semantic-ui-react';

class App extends Component {

 //* TODO: Logic for button in Content to redirect/route to MainForm
//* < MainForm / >
//* < GraphicTest />


  render() {
    return(
      <Container id="container" textAlign='center' >
      
        < Header / >
        < Content / >
             
      </Container>    
    )
  }
}

export default App;
