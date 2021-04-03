import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/products.reducer";

const reducers = combineReducers({
    products: productsReducer
});

function storeConfig() {
    return createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default storeConfig;