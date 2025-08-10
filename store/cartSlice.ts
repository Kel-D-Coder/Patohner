

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type CartItem = {
    name: string,
    price: number,
    imageUrl: string,
    quantity: number
}

interface CartState {
    items: CartItem[]
}

const initialState: CartState = {
    items: []
} 

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.name === action.payload.name);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            console.log(state)
        },
        removeFromCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.name === action.payload.name);
            if (existingItem) {
                existingItem.quantity -= action.payload.quantity;
                if (existingItem.quantity <= 0) {
                    state.items = state.items.filter(item => item.name !== action.payload.name);
                }
            }
            console.log(state)
        },

        clearCart: (state) => {
            state.items = [];
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;