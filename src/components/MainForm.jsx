import React, { Component } from 'react';
import UserDetails from './UserDetails';
import GoalDetails from './GoalDetails';
import ShareDetails from './ShareDetails';
import Success from './Success';
import { Step } from 'semantic-ui-react';



class UserSteps extends Component {

    render() {
        const { values } = this.props;
        return (
            <Step.Group ordered>
                <Step completed>
                    <Step.Content>
                        <Step.Title>Shipping</Step.Title>
                        <Step.Description>Choose your shipping options</Step.Description>
                    </Step.Content>
                </Step>

                <Step completed>
                    <Step.Content>
                        <Step.Title>Billing</Step.Title>
                        <Step.Description>Enter billing information</Step.Description>
                    </Step.Content>
                </Step>

                <Step active>
                    <Step.Content>
                        <Step.Title>Confirm Order</Step.Title>
                    </Step.Content>
                </Step>
            </Step.Group>
        )
    }
}

class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        city: '',
        country: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }
    
    render(){
        const {step} = this.state;
        const { firstName, lastName, email, age, city, country } = this.state;
        const values = { firstName, lastName, email, age, city, country };
        
        
        switch(step) {
        case 1:
            return <UserDetails 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <GoalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <ShareDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 4:
            return <Success />
        
        default:
            return null
        }
       

    }
}


export  default MainForm;