import React, { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo2 from "./logo2.png"

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <>
    <header>
  <img src={logo2} alt="logo" height={300}  />  
    <nav ref={navRef}>   
        <a href='/CopperWare'>Copperware</a>
        <a href='/BrassWare'>Brassware</a>
        <a href='/BronzeWare'>Bronzeware</a>   
        <a href='/PujaUtensils'>Puja Utensils</a>
        <a href='/Idols'>Idols</a>  
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
        <FaTimes/>
      </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
    </>
  )
}

export default Navbar
