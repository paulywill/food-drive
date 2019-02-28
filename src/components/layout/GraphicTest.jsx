import React, { Component } from 'react'

export class GraphicTest extends Component {
  
    componentDidMount() {
        const script = document.createElement("script");

        script.src = process.env.PUBLIC_URL + 'fork-plate-knife/loading-bar.js';
        script.async = true;

        document.body.appendChild(script);
    }
  
  
    render() {
    
      
    
    return (
        <div id="stats" className="container">
        
            <div id="plate-graphic" >

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

            <div id="foodWeight">
                    <h1>600 lbs</h1>
            </div>

            <div id="kitch-scale">
                <img src={process.env.PUBLIC_URL + 'kitchen-scale.png'} />
            </div>

        </div>
    )
  }
}

export default GraphicTest
