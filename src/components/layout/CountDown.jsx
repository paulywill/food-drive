import React, { Component } from 'react';
import CountdownTimer from "react-component-countdown-timer"; 
import "./countdownStyle.css";

class CountDown extends React.Component {
  render() {
    var settings = {
      count: 5432,
      border: true,
      showTitle: true,
      noPoints: true,
    };
    return (
      
      
      <CountdownTimer {...settings} />
   
      );
  }
}

export default CountDown
