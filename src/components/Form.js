import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCard} from "../redux/features/card";


function Form({name, setName, number, setNumber, month, setMonth, year, setYear, cvc, setCvc }) {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const onFormSubmit = (e) => {
        e.preventDefault()
        navigate("/submit", {replace: true})
        dispatch(setCard({cardName: name, cardNumber: number, cardYear: year, cardMonth: month, cardCvc: cvc}))
    }

    const onKeyUpSelect = (e) => {
      const txt = e.target.value
        if (txt.length ===4 || txt.length ===9 || txt.length ===14){
            e.target.value = e.target.value+" ";
        }
    }

  return (
          <form className="ui form form-controls" onSubmit={onFormSubmit}>
              <div className="eight wide field">
                  <label>CARDHOLDER NAME</label>
                  <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      maxLength="16"
                      className="inputs"
                      name="names"
                      placeholder="e.g Jane Appleseed"
                      value={name}
                      required
                  />
              </div>
              <div className="eight wide field">
                  <label>CARD NUMBER</label>
                  <input
                      type="text"
                      onChange={(e) => setNumber(e.target.value)}
                      onKeyUp={onKeyUpSelect}
                      pattern="[0-9 ]+"
                      className="inputs"
                      name="cardNumber"
                      placeholder="e.g 1234 5678 9023 7890"
                      minLength="19"
                      maxLength="19"
                      value={number}
                      required
                  />
              </div>
              <div className="fields">
                  <div className="four wide field">
                      <label>EXP. DATE(MM/YY)</label>
                      <div className="two fields">
                          <div className="field">
                              <input
                                  type="text"
                                  onChange={(e) => setMonth(e.target.value)} className="inputs"
                                  pattern="[0-9]*"
                                  name="month"
                                  maxLength="2"
                                  placeholder="MM"
                                  value={month}
                                  required
                              />
                          </div>
                          <div className="field">
                              <input
                                  type="text"
                                  onChange={(e) => setYear(e.target.value)} className="inputs"
                                  pattern="[0-9]*"
                                  name="year"
                                  minLength="2"
                                  maxLength="2"
                                  placeholder="YY"
                                  value={year}
                                  required
                              />
                          </div>
                      </div>
                  </div>

                  <div className="four wide field">
                      <label>CVC</label>
                      <input
                          type="text"
                          onChange={(e) => setCvc(e.target.value)} className="inputs"
                          pattern="[0-9]*"
                          name="cvc"
                          maxLength="3"
                          placeholder="e.g 123"
                          value={cvc}
                          required
                      />
                  </div>
              </div>
              <button type={"submit"} className="large ui black button form-button">Confirm</button>
          </form>
  )
}

export default Form