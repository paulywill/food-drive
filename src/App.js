import React, { Component } from 'react';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Graphic from './components/layout/Graphic';
import MainForm from './components/MainForm';
import { Container } from 'semantic-ui-react';

class App extends Component {

 //* TODO: Logic for button in Content to redirect/route to MainForm

//*     <Header />
//*     <Content / >
//*     <MainForm / >


  render() {
    return(
      <Container id="container" textAlign='center' >
      
        < Header / >
        < Graphic />
     
      </Container>    
    )
  }
}

export default App;
