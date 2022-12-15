import React from "react";
import {useSelector} from "react-redux";
import cardFront from "../images/bg-card-front.png";
import cardLogo from "../images/card-logo.svg";
import cardBack from "../images/bg-card-back.png";


function CardSubmitted() {

    const card = useSelector((state) => state.card.value)

    return(
        <div>
            <div style={{backgroundImage: `url(${cardFront})`}} className="card-front">
                <img src={cardLogo} alt="card logo" className="card-logo"/>
                <p className="card-number">{card.cardNumber}</p>
                <p className="card-name">{card.cardName} <span className="span-date">{card.cardMonth}/{card.cardYear}</span></p>
            </div>
            <div style={{backgroundImage: `url(${cardBack})`}} className="card-back">
                <p className="cvc-input">{card.cardCvc}</p>
            </div>
        </div>
    )
}

export default CardSubmitted