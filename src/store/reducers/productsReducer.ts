import { ProductsActions, ProductsActionsTypes, ProductsState } from "../../types/products";

const initialState: ProductsState = {
  products: [],
  producers: null,
  fetchLoading: false,
  fetchError: null,
};

export const productsReducer = (state = initialState, action: ProductsActions): ProductsState => {
  switch (action.type) {
    case ProductsActionsTypes.FETCH_PRODUCTS:
      return {...state, fetchLoading: true, fetchError: null};
    case ProductsActionsTypes.FETCH_PRODUCTS_SUCCESS:
      return {...state, fetchLoading: false, products: action.payload};
    case ProductsActionsTypes.FETCH_PRODUCTS_FAILURE:
      return {...state, fetchLoading: false, fetchError: action.payload};
    case ProductsActionsTypes.GET_ALL_PRODUCERS:
      return {...state, producers: action.payload};
    default:
      return state;
  }
};