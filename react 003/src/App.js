import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from './data'

export default function App() {
    const dataEl = data.map(e=>{
        return <Card 
            key={e.id}
            {...e}
        />
    })
    console.log(dataEl)
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {dataEl}
            </section>
        </div>
    )
}
