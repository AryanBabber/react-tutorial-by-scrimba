import React from 'react';
import Header from './components/Header'
import Main from './components/Main'

export default function App() {
    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    return(
        <div className='container'>
            <Header />
            <Main />
        </div>
    )
};
