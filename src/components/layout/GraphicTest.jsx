import React, { Component } from 'react'
import { Container, Divider, Grid, Header, Menu, Message, Segment, Table } from 'semantic-ui-react'



export class GraphicTest extends Component {
  
    componentDidMount() {
        const script = document.createElement("script");

        script.src = process.env.PUBLIC_URL + 'fork-plate-knife/loading-bar.js';
        script.async = true;

        document.body.appendChild(script);
    }
  
    render() {
    return (
        
        <div className="container">

            <div className="ui statistic">
                <div className="label">
                    Goal Completed 
                </div>
    
                <div id="plate-graphic"  >
                    <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + 'fork-plate-knife/loading-bar.css'} />
                    <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + 'fork-plate-knife/plate-style.css'} />      
                    <div id="fork-plate-knife" >
                        <img src={process.env.PUBLIC_URL + 'fork-plate-knife/fork-plate-knife.svg'} />
                    </div>
                    <div id="progress-plate"
                        className="ldBar"
                        data-value="100"
                        data-preset="circle"
                        data-type="stroke"
                        data-stroke-width="70"              
                    ></div>
                </div> 
            
        </div>
<div class="ui divider"></div>
            <div className="ui statistic">
                <div id="foodWeight" className="label">
                    Food Weight
                </div>    
                <div className="value">
                    600 lbs
                </div>
                <div id="kitch-scale">
                    <img src={process.env.PUBLIC_URL + 'kitchen-scale.png'} />
                </div>
            </div>
            
            <div className="ui statistic">
                <div className="label">
                    Time Remaining 
                </div>
                <div className="value">
                    4:05 
                </div>
            </div>  
        
      
        </div>
    )
  }
}

export default GraphicTest
