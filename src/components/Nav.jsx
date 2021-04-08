import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'; 

const Nav = () => {
  return (
    <div className='nav'>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Nav;