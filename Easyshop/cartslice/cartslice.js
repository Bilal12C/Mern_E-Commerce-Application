import { createSlice } from "@reduxjs/toolkit";


const initiallstate = {
    cartitem:[]
}

const cartreducer = createSlice({
    name:'cart',
    initialState:initiallstate,
    reducers:{
        addtocart(state,action){
            state.cartitem.push(action.payload)
        }
    }
})


export const { addtocart } = cartreducer.actions;

export default cartreducer.reducer;