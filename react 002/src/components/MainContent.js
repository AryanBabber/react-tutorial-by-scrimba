import React from "react"

export default function MainContent() {
    return (
        <div className="main">
            <h1 className="main--header">Laura Smith</h1>
            <h4 className="main--subheader">Frontend developer</h4>
            <h5 className="main--subheader">laurasmith.website</h5>
            <button className="main--button">Mail</button>
            <div className="main--about">
                <h3>About</h3>
                <p>
                    I am a frontend developer with a particular interest in
                    making things simple and automating daily tasks. I try to
                    keep up with security and best practices, and am always
                    looking for new things to learn.
                </p>
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}
