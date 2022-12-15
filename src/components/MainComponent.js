import React, {useState} from "react";
import mainDeskImg from "../images/bg-main-desktop.png";
import Cards from "./Cards";
import Form from "./Form";



function MainComponent() {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [cvc, setCvc] = useState('')

    return(
        <div className="main-div">
            <div className="first-container">
                <div style={{backgroundImage: `url(${mainDeskImg})`}} className='main-desk-img'></div>
                <Cards
                    name={name}
                    number={number}
                    month={month}
                    year={year}
                    cvc={cvc}
                />
            </div>

            <div className="form-input">
                <Form
                    name={name}
                    setName={setName}
                    number={number}
                    setNumber={setNumber}
                    month={month}
                    setMonth={setMonth}
                    year={year}
                    setYear={setYear}
                    cvc={cvc}
                    setCvc={setCvc}
                />
            </div>
        </div>

    )
}

export default MainComponent