import React from 'react';
import airbnb from '../images/airbnb-logo.png'

export default function Navbar() {
    return(
        <nav className='nav-bar'>
            <img src={airbnb} alt='airbnb logo' />
        </nav>
    )
};
