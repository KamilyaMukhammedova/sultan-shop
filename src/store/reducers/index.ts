import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { basketReducer } from "./basketReducer";

export const rootReducers = combineReducers({
  products: productsReducer,
  basket: basketReducer
});

export type RootState = ReturnType<typeof rootReducers>;