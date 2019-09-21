import React from 'react';

import Backdrop from './Backdrop'

import '../assets/styles/components/Sidebar.css'

export default ({open, clickToggle}) => (
    <div className="sidebar">
        {open &&
            <Backdrop clickToggle={clickToggle}/>
        }
        <nav className={`bg-brb sidebar_nav ${open && 'open'}`}>
            <ul>
                <li className="item"><a href="/">Precios</a></li>
                <li className="item"><a href="/">Equipos</a></li>
                <li className="item"><a href="/">Entregas</a></li>
                <li className="item"><a href="/">Noticias</a></li>
            </ul>
        </nav>
    </div>
);