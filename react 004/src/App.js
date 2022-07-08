import React from 'react';
import data from './data'
import Card from './components/Card'
import Header from './components/Header'

export default function App() {
    const itemEl = data.map(w=>{
        return <Card 
            key={w.key}
            {...w}
        />
    })
    return(
        <div className='container'>
            <Header />
            {itemEl}
        </div>
    )
};
