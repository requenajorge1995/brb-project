import React from 'react'

import '../assets/styles/components/ToggleButton.css'

const ToggleButton = props => (
  <button className="toggle-button" onClick={props.clickToggle}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
)

export default ToggleButton