import React from "react";
import CardSubmitted from "./CardSubmitted";
import mainDeskImg from "../images/bg-main-desktop.png";
import thankYouLogo from "../images/icon-complete.svg";
import {useNavigate} from "react-router-dom";


function Submitted() {

    const navigate = useNavigate()

    const onFormSubmit = (e) => {
        e.preventDefault()
        navigate("/", {replace: true})
    }

    return(
        <div className="main-div">
            <div className="first-container">
                <div style={{backgroundImage: `url(${mainDeskImg})`}} className='main-desk-img'></div>
                <CardSubmitted />
            </div>

            <div className="second-container">
                <img src={thankYouLogo} alt="thank you logo" id="complete-logo"/>
                <h1 className="h1-head">THANK YOU! <span id="small-text">We've added Your details </span></h1>

                <br/>

                <form className="ui form form-submit" onSubmit={onFormSubmit}>
                    <button type={"submit"} className="large ui black button form-button">Continue</button>
                </form>


            </div>

        </div>
    )
}

export default Submitted