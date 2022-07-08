import React from "react"
import globe_black from "../images/globe-black.png"

export default function Header() {
    return (
        <div className="header">
            <img src={globe_black} alt="globe" className="header--img" />
            <h4 className="header--text">My travel journal</h4>
        </div>
    )
}
