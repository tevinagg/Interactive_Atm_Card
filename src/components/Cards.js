import React from "react";
import cardBack from "../images/bg-card-back.png"
import cardFront from "../images/bg-card-front.png"
import cardLogo from "../images/card-logo.svg"


function Cards({name, number, month, year, cvc}) {

    return(
        <div>
            <div style={{backgroundImage: `url(${cardFront})`}} className="card-front">
                <img src={cardLogo} alt="card logo" className="card-logo"/>
                <p className="card-number">{number}</p>
                <p className="card-name">{name} <span className="span-date">{month}/{year}</span></p>
            </div>
            <div style={{backgroundImage: `url(${cardBack})`}} className="card-back">
                <p className="cvc-input">{cvc}</p>
            </div>
        </div>
    )
}

export default Cards