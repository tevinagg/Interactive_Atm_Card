import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cardMonth: '',
}

export const cardMonthSlice = createSlice({
    name: "card Month",
    initialState,
    reducers: {
        setCardMonth: (state, action) => {
            state.cardMonth = action.payload
        }
    }
})


export const {setCardMonth} = cardMonthSlice.actions

export default cardMonthSlice.reducer