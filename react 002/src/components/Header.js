import React from 'react';
import pfp from  '../images/pfp.png'

export default function Header(){
    return(
        <header className='header'>
            <img src={pfp} alt="profile" className='header--img' />
        </header>
    )
}