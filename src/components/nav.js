import React from 'react';
import { useState } from 'react';
import "./nav.css"

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
            <a id="btn" href='#' onClick={toggleMenu}>{menuText}</a>
            <div className={`right1 ${isOpen ? 'show' : ''}`}>
            <p id="p1">Skill</p>
                <p id="p1">Projects</p>
                <p id="p1">Contact</p>
                <p id="p1">About</p>
            </div>
        </div>
    )
    
}
export default Nav