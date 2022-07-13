import React from 'react';
import troll from '../images/troll-face.png'

export default function Header() {
    return(
        <div className='header'>
            <div className='head'>
                <img
                    src={troll}
                    alt='troll-face'
                />
                <h2 className='head--title'>Meme Generator</h2>
            </div>
            <h4>React course - Project 3</h4>
        </div>
    )
};
