import { configureStore } from "@reduxjs/toolkit";
import cartslice from "../cartslice/cartslice";


const store = configureStore({
    reducer:{
        cart:cartslice
    }
})

export default store;