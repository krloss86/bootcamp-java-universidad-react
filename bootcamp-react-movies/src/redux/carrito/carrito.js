import { createSlice } from "@reduxjs/toolkit";

export const CarritoInitialState = {   };

export const carritoSlice = createSlice({
    name: 'carrito',
    initialState: CarritoInitialState,
    reducers: {
        createCarrito: (state,action) => {
            return action.payload;
        },
        modifyCarrito: (state,action) => {
            return {...state, ...action.payload}
        },
        resetCarrito: () => {
            return CarritoInitialState;
        }
    }
});

export const {createCarrito,modifyCarrito, resetCarrito} = carritoSlice.actions;