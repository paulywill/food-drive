import React, { Component } from 'react';
import { Step } from 'semantic-ui-react';

class Success extends Component{
    
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    
    
    render(){
        return(
            <div>
                <Step.Group ordered>
                    <Step completed>
                        <Step.Content>
                            <Step.Title>Organizer</Step.Title>
                            <Step.Description>Enter Organizer's Details</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step completed >
                        <Step.Content>
                            <Step.Title>Goals</Step.Title>
                            <Step.Description>Enter goals for food drive</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step completed >
                        <Step.Content>
                            <Step.Title>Share</Step.Title>
                            <Step.Description>Spread the word</Step.Description>
                        </Step.Content>
                    </Step>
                </Step.Group>
                <h1 className="ui centered">Details Successfully Saved</h1>

               
            </div>
        )
    }
}

export default Success;