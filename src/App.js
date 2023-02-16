import { useState } from 'react';
import MainSection from './MainSection';
import './App.css';
import SideNav from './SideNav';

export default function App() {
  const [active, setActive] = useState("INBOX")
  return (
    <div className='main'>
      <div className='main1'>
        <h1>TO DO LIST</h1>
      </div>
      <div className="container">
        <div className="sidenav">
          <SideNav change={setActive} />
        </div>
        <div className="mainsection">
          <MainSection active={active} />
        </div>
      </div>
    </div>
  );
}