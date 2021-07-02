import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLE = ['btn--primary', 'btn--outline'];
const SIZE = ['btn--medium', 'btn--large'];
//include -- for bootstrap classes??

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle:STYLE[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize: SIZE[0];

    return(
        <Link to='/subscribe' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick= {onClick} type={type}>
                {children}
            </button>
        </Link>        
    )
};