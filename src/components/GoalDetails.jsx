import React, { Component } from 'react';
import { Form, Button, Step } from 'semantic-ui-react';

class PersonalDetails extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
        <Form>

                <Step.Group ordered>
                    <Step completed>
                        <Step.Content>
                            <Step.Title>Organizer</Step.Title>
                            <Step.Description>Enter Organizer's Details</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step active >
                        <Step.Content>
                            <Step.Title>Goals</Step.Title>
                            <Step.Description>Enter goals for food drive</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step >
                        <Step.Content>
                            <Step.Title>Share</Step.Title>
                            <Step.Description>Spread the word</Step.Description>
                        </Step.Content>
                    </Step>
                </Step.Group>

            <Form.Field>
                <label>Age</label>
                <input placeholder='Age'
                onChange={this.props.handleChange('age')}
                defaultValue={values.age}
                />
            </Form.Field>
            <Form.Field>
                <label>City</label>
                <input placeholder='City'
                onChange={this.props.handleChange('city')}
                defaultValue={values.city}
                />
            </Form.Field>
            <Form.Field>
                <label>Country</label>
                <input placeholder='Country'
                onChange={this.props.handleChange('country')}
                defaultValue={values.country}
                />
            </Form.Field>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        </Form>
        )
    }
}

export default PersonalDetails;