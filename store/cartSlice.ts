"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { stat } from "fs"

export type CartItem = {
    name: string,
    price: number,
    imageUrl: string,
    quantity: number,
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
                existingItem.quantity += 1
            } else {
                state.items.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.name === action.payload.name);
            if (existingItem) {
                existingItem.quantity -= 1;
                if (existingItem.quantity <= 0) {
                    state.items = state.items.filter(item => item.name !== action.payload.name);
                }
            }
        },

        clearCart: (state) => {
            state.items = [];
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;