import React from 'react';

import logo from '../assets/images/brb_white.png'
import ToggleButton from './ToggleButton'

import '../assets/styles/components/Header.css'

export default (props) => {
    return (
        <header className="bg-brb header">
            <nav className="nav">
                <ToggleButton clickToggle={props.clickToggle}/>
                <img src={logo} alt="brb-logo"></img>
            </nav>
        </header>
    )
}