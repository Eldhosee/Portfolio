import React from 'react';
import { useState } from 'react';
import "./nav.css"
import { Link } from 'react-scroll'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuText, setMenuText] = useState('Menu');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setMenuText(isOpen ? 'Menu' : 'Close');
    }

    return (
        <div className='container1'>
            <h2 className='h2'>Portifolio</h2>
            <a id="btn" href='#' onClick={toggleMenu} >{menuText}</a>
            <div className={`right1 ${isOpen ? 'show' : ''}`}>
              <Link to="skills" id="p1" smooth={true} duration={500} >Skills</Link>
              <Link to="projects" id="p1" smooth={true} duration={500} >Projects</Link>
              <Link to="about" id="p1" smooth={true} duration={500} >Contact</Link>
              <Link to="about" id="p1" smooth={true} duration={500} >About</Link>

            </div>
        </div>
             
    )
    
}
export default Nav