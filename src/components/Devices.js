import React, { useState, useEffect } from 'react';

import Device from './Device'

import '../assets/styles/components/Devices.css'

const deviceMaker = (devices) => {
    if (devices)
        return devices.map((d) => (
            <div key={d.id} className="col-6 device_wrapper">
                <Device {...d} />
            </div>
        ))

}

export default () => {

    const [state, setState] = useState({ devices: undefined })

    useEffect(() => {
        fetch('http://localhost:3500/devices')
            .then((res) => res.json())
            .then(data => setState({ devices: data }))
    }, []);

    return (
        <div className="row devices_wrapper">
            {deviceMaker(state.devices)}
        </div>
    )
}