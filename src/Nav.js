import React, {Component} from 'react'
import './App.css'

export default class Nav extends Component {
    render() {
        return(
            <nav className='navBar'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        );
    }
}
