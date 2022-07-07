import React from "react"
import heroicon from "../images/hero-icon.png"

export default function Hero() {
    return (
        <main className="main">
            <img src={heroicon} alt="Main-img" />
            <div className="experiences">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind
                    hosts—all without leaving home.
                </p>
            </div>
        </main>
    )
}
