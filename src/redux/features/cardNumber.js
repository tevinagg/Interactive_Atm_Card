import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cardNumber: '',
}

export const cardNumberSlice = createSlice({
    name: "card Number",
    initialState,
    reducers: {
        setCardNumber: (state, action) => {
            state.cardNumber = action.payload
        }
    }
})


export const {setCardNumber} = cardNumberSlice.actions

export default cardNumberSlice.reducer