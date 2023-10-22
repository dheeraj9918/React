import { createSlice } from "@reduxjs/toolkit";


const cardSlice = createSlice({
    name: 'cart',
    initialState: {
        items: ["1", "2", "3"]
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItems: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});




export const { addItems, removeItems, clearCart } = cardSlice.actions;

export default cardSlice.reducer;