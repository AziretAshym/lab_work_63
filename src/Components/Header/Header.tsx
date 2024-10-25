import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
     <header className="header">
       <div className="container">
         <div className="headerContainer">
           <NavLink to="/" className="logo">
             <div className="logoImgContainer">
               <img src="https://www.svgrepo.com/show/530592/creativity.svg" alt="lampAppLogo" className="logoImg"/>
             </div>
             <p>LampApp</p>
           </NavLink>
           <nav className="navbar">
             <li><NavLink to="/" className="navLink">Home</NavLink></li>
             <li><NavLink to="/posts/new-post" className="navLink">Add new post</NavLink></li>
             <li><NavLink to="/about" className='navLink'>About</NavLink></li>
             <li><NavLink to="/contacts" className='navLink'>Contacts</NavLink></li>
           </nav>
         </div>
       </div>
     </header>
    </>
  );
};

export default Header;