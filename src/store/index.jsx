import { configureStore } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';

const initialState = {
    products: [],
    orders: [],
    cart: [],
    user: null,
}

/* Transformer l'état de valeurs (Synchrone)*/
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            return { ...state, user: action.payload };
        case ActionTypes.LOGIN_FAILURE:
            return { ...state, user: null };
        case ActionTypes.LOGOUT:
            return { ...state, user: null };
        case ActionTypes.FETCH_PRODUCTS_UPDATE:
            return { ...state, products: action.payload };
        default:
            return state;
    }
}

/* Prépare le travail du reducer (Asynchrone) */
const middleware = (store) => (next) => async (action) => {
    console.log('Middleware:', action);
    next(action);

    if(action.type === ActionTypes.FETCH_PRODUCTS_REQUEST){
        const data = await fetch('http://localhost:5050/products').then(res => res.json());
        store.dispatch({ type: ActionTypes.FETCH_PRODUCTS_UPDATE, payload: data });
    }

}

export const ActionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT',
    FETCH_PRODUCTS_REQUEST: 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_UPDATE: 'FETCH_PRODUCTS_UPDATE',
}


const store = configureStore({
    initialState,
    reducer,
    middleware: () => [middleware],
    name:'ProductStore'
});


export const useStore = () => {

    const [state, setState] = useState(store.getState());
    
    useEffect(() => store.subscribe(()=> setState(store.getState()) ), []);

    return { state, dispatch:store.dispatch };
}
