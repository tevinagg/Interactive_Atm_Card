import React from "react";
import {useSelector} from "react-redux";
import cardFront from "../images/bg-card-front.png";
import cardLogo from "../images/card-logo.svg";
import cardBack from "../images/bg-card-back.png";


function CardSubmitted() {

    const cardName = useSelector((state) => state.name.cardName);
    const cardNumber = useSelector((state) => state.number.cardNumber);
    const cardMonth = useSelector((state) => state.month.cardMonth);
    const cardYear = useSelector((state) => state.year.cardYear);
    const cardCvc = useSelector((state) => state.cvc.cardCvc);

    return(
        <div>
            <div style={{backgroundImage: `url(${cardFront})`}} className="card-front">
                <img src={cardLogo} alt="card logo" className="card-logo"/>
                <p className="card-number">{cardNumber}</p>
                <p className="card-name">{cardName} <span className="span-date">{cardMonth}/{cardYear}</span></p>
            </div>
            <div style={{backgroundImage: `url(${cardBack})`}} className="card-back">
                <p className="cvc-input">{cardCvc}</p>
            </div>
        </div>
    )
}

export default CardSubmitted