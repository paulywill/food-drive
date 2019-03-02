import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./contentStyle.css";
import MainForm from './MainForm';
import { Link } from 'react-router-dom';


export default function Content() {
  return (
    <Router>
      <div className="ui inverted vertical center aligned segment">
        <div className="container">
          <div class="ui text container">
            <h1 className="ui inverted header">Run a Food Drive</h1>
            <h2>Make a Difference in the Lives of Others</h2>
            <Route path="/mainform" render={props => (

              <React.Fragment>
                
                
                
                <Link to="/mainform">
                <div className="ui huge primary button">Get Started</div>
                <i className="right arrow icon">
                </i></Link>
                
              </React.Fragment>  
              
            )} />
            
            
          
          </div>
        </div>
      </div>
    </Router>
  
  
  
  )
}
