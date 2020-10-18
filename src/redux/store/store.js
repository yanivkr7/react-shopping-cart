import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from '../products/products.reducer';

const initialState = {};
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(combineReducers(
    {
        products: productsReducer,

    }),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;