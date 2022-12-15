import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cardYear: '',
}

export const cardYearSlice = createSlice({
    name: "card Year",
    initialState,
    reducers: {
        setCardYear: (state, action) => {
            state.cardYear = action.payload
        }
    }
})


export const {setCardYear} = cardYearSlice.actions

export default cardYearSlice.reducer