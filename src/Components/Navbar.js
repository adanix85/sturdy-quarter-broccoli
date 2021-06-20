import React, {useState} from 'react';
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

    window.addEventListener('resize', showButton);
    
    return (
        <>
         <nav className="navbar">
             <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                TRAVEL <i className="fas fa-route"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                 <i className={click ? './public/times-solid.svg' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu-active' : 'nav-menu'} >
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeHamburgerMenu} />
                        Home
                    </li>
                    <li className='nav-item'>
                        <Link to='/aboutUs' className='nav-links' onClick={closeHamburgerMenu} />
                        About Us
                    </li>
                    <li className='nav-item'>
                        <Link to='/packages' className='nav-links' onClick={closeHamburgerMenu} />
                        Packages
                    </li>
                    <li className='nav-item'>
                        <Link to='/subscribe' className='nav-links-mobile' onClick={closeHamburgerMenu}> 
                        Subscribe
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Subscribe</Button>}
             </div>
         </nav>   
        </>
    )
}

export default Navbar
