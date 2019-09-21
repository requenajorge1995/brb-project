import React, { useState } from 'react';
import '../assets/styles/components/App.css';


import Header from './Header'
import Sidebar from './Sidebar'
import Devices from './Devices'

function App() {

  const [sidebarStatus, setSidebarStatus] = useState({open: false})

  const sideBarToggle = () => {
    setSidebarStatus({open: !sidebarStatus.open})
  }

  return (
    <div className="App">
      <Header clickToggle={sideBarToggle}></Header>
      
      <Sidebar open={sidebarStatus.open} clickToggle={sideBarToggle}/>

      <Devices/>

    </div>
  );
}

export default App;
