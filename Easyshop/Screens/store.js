import { configureStore } from "@reduxjs/toolkit";
import cartslice from "../cartslice/cartslice";
import userslice from "../userslice/userslice";
const store = configureStore({
    reducer:{
        cart:cartslice,
        user:userslice
    }
})

export default store;