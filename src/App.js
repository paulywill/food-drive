import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import DriveForm from './components/pages/DriveForm';
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
        < Container>  
          < Header / >
          < Route exact path="/" render={props => (
            < React.Fragment>
            <div className = "ui inverted vertical center aligned segment" >
                <div className = "container" >
                  <div class = "ui text container" >
                    <h1 className = "ui inverted header" > Run a Food Drive </h1> 
                     <h2> Make a Difference in the Lives of Others </h2>
                  </div>
                </div>
              </div>
            </React.Fragment>     
          )} />
          <Route path = "/driveform" component = {DriveForm}/>
      
          <Link to = "/driveform" >
          <div className = "ui huge primary button" > Get Started </div> 
          </Link> 

      </Container>
    </Router>


               
    );
  }
}

export default App;
