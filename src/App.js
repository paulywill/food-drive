import React, { Component } from 'react';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import MainForm from './components/MainForm';
import { Container } from 'semantic-ui-react';

class App extends Component {

  render() {
    return(
      <Container id="container" textAlign='center' >
        <Header />
        <Content />
        <MainForm />
      </Container>    
    )
  }
}

export default App;
