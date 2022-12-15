import {configureStore} from "@reduxjs/toolkit";
import cardReducer from "./features/card";


export const store = configureStore({
    reducer:{
        card: cardReducer
    }
})