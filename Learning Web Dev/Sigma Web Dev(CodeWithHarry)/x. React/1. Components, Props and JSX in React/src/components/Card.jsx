import React from "react";
import "./Card.css"

const Card = (props) => {
    return (
        <div className="card">
            <img src="https://picsum.photos/600" width={400} alt="Lorem Picsum" />
            <h2 className="cardTitle"> {props.title != null ? props.title : "Generic Title!"}</h2>
            <p className="cardDescription">{props.desc != null ? props.desc : "Generic Description!"}</p>
        </div>
    )
}

export default Card;