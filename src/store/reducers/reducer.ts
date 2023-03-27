import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";

export const rootReducers = combineReducers({
  products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducers>;