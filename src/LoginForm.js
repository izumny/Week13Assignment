import React, {Component} from 'react'
import './App.css'

export default class LoginForm extends Component {
    render() {
        return(
            <div className='login-form'>
                <h3>Log In</h3>
                <input type='text' placeholder='Username'/>
                <input type='password' placeholder='Password'/>
                <button type='submit'>Log In</button>
            </div>
        );
    }
}

