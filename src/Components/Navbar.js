import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeHamburgerMenu = () => setClick(false);
    return (
        <>
         <nav className="navbar">
             <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                TRAVEL <i className="fas fa-route"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                 <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
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
                        <Link to='/subscribe' className='nav-links-mobile' onClick={closeHamburgerMenu} />
                        Subscribe
                    </li>
                </ul>
             </div>
         </nav>   
        </>
    )
}

export default Navbar
