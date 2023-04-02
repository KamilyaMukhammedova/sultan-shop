import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { basketReducer } from "./basketReducer";
import { modeReducer } from "./modeReducer";

export const rootReducers = combineReducers({
  products: productsReducer,
  basket: basketReducer,
  mode: modeReducer
});

export type RootState = ReturnType<typeof rootReducers>;