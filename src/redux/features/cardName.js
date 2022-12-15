import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  cardName: '',
}

export const cardNameSlice = createSlice({
    name: "card Name",
    initialState,
    reducers: {
        setCardName: (state, action) => {
            state.cardName = action.payload
        }
    }
})

export const {setCardName} = cardNameSlice.actions

export default cardNameSlice.reducer