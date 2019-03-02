import React, { Component } from 'react';
import CountDown from './CountDown';
import { Container, Divider, Grid, Header, Menu, Message, Segment, Table } from 'semantic-ui-react';



export class GraphicTest extends Component {
  
    componentDidMount() {
        const script = document.createElement("script");

        script.src = process.env.PUBLIC_URL + 'fork-plate-knife/loading-bar.js';
        script.async = true;

        document.body.appendChild(script);
    }
  
    render() {
    

        const currentDate = new Date();
        const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
        return (
        <div className="container">

            <div class="ui divider"></div>

            <div className="ui statistic">
                <div className="label">
                    Time Remaining
                            </div>
                <CountDown date={`${year}-12-24T00:00:00`} />
            </div>

            <div class="ui divider"></div>
            
                <div class="ui segment">
                    <div class="ui two column very relaxed grid">
                        <div class="column">
                            <div className="ui statistic">
                                <div id="foodWeight" className="label">
                                    Approx. Food Weight
                                </div>
                                <div className="value">
                                    600 lbs
                                </div>
                                <div id="kitch-scale">
                                    <img src={process.env.PUBLIC_URL + 'kitchen-scale.png'} />
                                </div>
                            </div>   
                        </div>
                        <div class="column">
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
                                    >
                                    </div>
                                </div>

                            </div>  
                        </div>
                    </div>
                    
                </div>
        </div>
    )
  }
}

export default GraphicTest
