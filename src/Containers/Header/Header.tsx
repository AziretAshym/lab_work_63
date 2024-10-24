import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
     <header className="header">
       <div className="container">
         <div className="headerContainer">
           <a href="#" className="logo">
             <div className="logoImgContainer">
               <img src="https://www.svgrepo.com/show/530592/creativity.svg" alt="lampAppLogo" className="logoImg"/>
             </div>
             <p>LampApp</p>
           </a>
           <nav className="navbar">
             <li><a href="#" className="navLink">Home</a></li>
             <li><a href="#" className="navLink">Add new post</a></li>
             <li><a href="#" className='navLink'>About</a></li>
             <li><a href="#" className='navLink'>Contacts</a></li>
           </nav>
         </div>
       </div>
     </header>
    </>
  );
};

export default Header;