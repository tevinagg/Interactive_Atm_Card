import {configureStore} from "@reduxjs/toolkit";
import cardNameReducer from "./features/cardName";
import cardNumberReducer from "./features/cardNumber";
import cardMonthReducer from "./features/cardMonth";
import cardYearReducer from "./features/cardYear";
import cardCvcReducer from "./features/cardCvc";


export const store = configureStore({
    reducer:{
        name: cardNameReducer,
        number: cardNumberReducer,
        month: cardMonthReducer,
        year: cardYearReducer,
        cvc: cardCvcReducer
    }
})