import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Content from './components/Content';
//import GraphicTest from './components/layout/GraphicTest';
//import MainForm from './components/MainForm';
import { Container } from 'semantic-ui-react';

class App extends Component {

 //* TODO: Logic for button in Content to redirect/route to MainForm
//* < MainForm / >
//* < GraphicTest />


  render() {
    return(
      < Router >
        <Container>          
          < Route exact path="/" render={props => (
            <React.Fragment>
              < Header / >
              < Content / >
            </React.Fragment>      
          )} />
                   
        </Container>
      </Router>
    );
  }
}

export default App;
