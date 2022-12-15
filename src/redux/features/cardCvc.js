import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cardCvc: '',
}

export const cardCvcSlice = createSlice({
    name: "card Cvc",
    initialState,
    reducers: {
        setCardCvc: (state, action) => {
            state.cardCvc = action.payload
        },
    }
})


export const {setCardCvc} = cardCvcSlice.actions

export default cardCvcSlice.reducer