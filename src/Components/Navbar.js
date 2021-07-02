import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeHamburgerMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, [])


    window.addEventListener('resize', showButton);
    
    return (
        <>
         <nav className='navbar'>
             <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeHamburgerMenu}>
                INSPIRE TRAVEL <i className="fas fa-route"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                 <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu-active' : 'nav-menu'} >
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeHamburgerMenu} >
                        HOME
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/aboutUs' className='nav-links' onClick={closeHamburgerMenu} >
                        ABOUT US
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/packages' className='nav-links' onClick={closeHamburgerMenu} >
                        PACKAGES
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/subscribe' className='nav-links-mobile' onClick={closeHamburgerMenu}/>   
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Subscribe</Button>}
             </div>
         </nav>   
        </>
    )
}

export default Navbar;
