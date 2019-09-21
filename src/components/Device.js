import React from 'react';

import '../assets/styles/components/Device.css'

export default ({brand, name, imgName}) => (
    <div className="device_card">
        <img src={`http://localhost:3500/uploads/${imgName}`} alt={`${name}-img`} />
        <div className="device_details">
            <h4><b>{brand}</b></h4>
            <p>{name}</p>
        </div>
    </div>
)