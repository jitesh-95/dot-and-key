import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
// import { selectedProductsReducer } from "./productReducer";
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});
export default reducers;
