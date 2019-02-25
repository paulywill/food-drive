import React, { Component } from 'react';
import { Button, List, Step } from 'semantic-ui-react';

class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { firstName, lastName, email, age, city, country }} = this.props;

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

                    <Step active >
                        <Step.Content>
                            <Step.Title>Share</Step.Title>
                            <Step.Description>Spread the word</Step.Description>
                        </Step.Content>
                    </Step>
                </Step.Group>
                <List>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>First Name: {firstName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Last Name: {lastName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                            <a href='mailto:jack@semantic-ui.com'>{email}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='calendar' />
                        <List.Content>{age} Years</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>{city}, {country}</List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Confirm</Button>
            </div>
        )
    }
}

export default Confirmation;