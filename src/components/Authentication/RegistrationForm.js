import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false    
        }
    }
    render() { 
        return (
            <div></div>
        )
    }
}
 
export default RegistrationForm;