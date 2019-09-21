import React from 'react';
import '../assets/styles/components/Backdrop.css'

export default (props) => (
    <div className="backdrop" onClick={props.clickToggle}/>
);