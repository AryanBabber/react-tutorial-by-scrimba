import React from "react"
import map from "../images/map.png"

export default function Card(props) {
    return (
        <div className="card">
            <img
                src={`../images/${props.imageUrl}`}
                alt="card"
                className="card--img"
            />
            <div className="card--main">
                <img src={map} alt="map" className="card--map" />
                <span className="card--location">{props.location}</span>
                <h2 className="card--head">{props.title}</h2>
                <h5 className="card--dates">{props.startDate} - {props.endDate}</h5>
                <p className="card--info">{props.description}</p>
            </div>
        </div>
    )
}
