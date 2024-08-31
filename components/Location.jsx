import React from "react";

export default function Card(props) {
    return (
        <div>
            <div className="location--card">
                <img 
                    src={`${props.imageUrl}`}
                    className="location--image" 
                    alt="location image" 
                />
                <div className="location--info">
                    <div className="position--container">
                        <div className="left--container">
                            <i className="fa-solid fa-location-dot maps--dot"></i>
                            <p className="location">{props.location}</p>
                        </div>
                        <a
                            className="location--maps"
                            href={`${props.googleMapsUrl}`}
                            > 
                            View on Google Maps
                        </a>
                    </div>
                    <h1 className="location--title">{props.title}</h1>
                    <p className="date">{props.startDate} - {props.endDate}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}