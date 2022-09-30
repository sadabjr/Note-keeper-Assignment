import React from 'react';
import "./header.css";
import logo from '../image/notification.png';

const Header = () => {
  return (
    <>
        <div className="header">
            <img src={logo} alt="logo" className='logo'/>
            <h2>Note Keeper</h2>
        </div>
    </>
  )
}

export default Header