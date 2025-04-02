const initialState = {
  products:[],
  orders:[],
  cart:[],
  user: null,
}

/* Transformer l'état de valeurs (Synchrone)*/
const reducer = (state = initialState, action) => {
    return state;
}

/* Prépare le travail du reducer (Asynchrone) */
const middleware = (store) => (next) => (action) => {
    console.log('Middleware:', action);
    return next(action);
}

export const ActionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT',
    FETCH_PRODUCTS_REQUEST: 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_UPDATE: 'FETCH_PRODUCTS_UPDATE',
}