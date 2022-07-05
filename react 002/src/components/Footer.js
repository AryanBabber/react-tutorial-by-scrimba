import React from 'react';
import Facebook from '../images/Facebook.png'
import Insta from '../images/Insta.png'
import Twitter from '../images/Twitter.png'
import Github from '../images/Github.png'
import Linkedin from '../images/Linkedin.png'

export default function Footer(){
    return(
        <footer className='footer'>
            <ul className='footer--list'>
                <li><img src={Facebook} alt='socials img'/></li>
                <li><img src={Insta} alt='socials img'/></li>
                <li><img src={Twitter} alt='socials img'/></li>
                <li><img src={Github} alt='socials img'/></li>
                <li><img src={Linkedin} alt='socials img'/></li>
            </ul>
        </footer>
    )
}