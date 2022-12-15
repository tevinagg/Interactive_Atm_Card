import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = {
    cardName: '',
    cardNumber: '',
    cardYear: '',
    cardMonth: '',
    cardCvc: '',
}

export const cardSlice = createSlice({
    name: 'card',
    initialState: {value: initialStateValue },
    reducers: {
        setCard: (state,action) => {
            state.value = action.payload
        }
    }
})

export const {setCard} = cardSlice.actions

export default cardSlice.reducer