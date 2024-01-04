import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from './users/user';
import { mensajesSlice } from "./mensajes/mensajes";
import { carritoSlice } from "./carrito/carrito";

export const EcomerceStore = configureStore({
    reducer : {
        users: userSlice.reducer,
        mensajes: mensajesSlice.reducer,
        carrito: carritoSlice.reducer
    }
});

export default EcomerceStore;