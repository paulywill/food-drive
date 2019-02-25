import React, { Component } from 'react';
import { Form, Button, Step } from 'semantic-ui-react';

class UserDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
                
            <Form color='green' >
                <Step.Group ordered>
                    <Step active>
                        <Step.Content>
                            <Step.Title>Organizer</Step.Title>
                            <Step.Description>Enter Organizer's Details</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step >
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
                    <label>First Name</label>
                    <input
                    placeholder='First Name'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                    placeholder='Last Name'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <input
                    type='email'
                    placeholder='Email Address'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default UserDetails;