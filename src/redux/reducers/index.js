import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductReducer,
});

export default reducers;
