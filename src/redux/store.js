import { combineReducers, applyMiddleware, createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  product: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
