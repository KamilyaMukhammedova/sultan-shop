import { ProductsActions, ProductsActionsTypes, ProductsState } from "../../types/products";

const initialState: ProductsState = {
  products: [],
  productsFromApi: [],
  producers: null,
  producersFromApi: null,
  oneProduct: null,
  oneProductFetchLoading: false,
  oneProductFetchError: null,
  fetchLoading: false,
  fetchError: null,
};

export const productsReducer = (state = initialState, action: ProductsActions): ProductsState => {
  switch (action.type) {
    case ProductsActionsTypes.FETCH_PRODUCTS:
      return {...state, fetchLoading: true, fetchError: null};
    case ProductsActionsTypes.FETCH_PRODUCTS_SUCCESS:
      return {...state, fetchLoading: false, products: action.payload, productsFromApi: action.payload};
    case ProductsActionsTypes.FETCH_PRODUCTS_FAILURE:
      return {...state, fetchLoading: false, fetchError: action.payload};
    case ProductsActionsTypes.FETCH_ONE_PRODUCT:
      return {...state, oneProductFetchLoading: true, oneProductFetchError: null};
    case ProductsActionsTypes.FETCH_ONE_PRODUCT_SUCCESS:
      return {...state, oneProductFetchLoading: false, oneProduct: action.payload};
    case ProductsActionsTypes.FETCH_ONE_PRODUCT_FAILURE:
      return {...state, oneProductFetchLoading: false, oneProductFetchError: action.payload};
    case ProductsActionsTypes.GET_ALL_PRODUCERS:
      return {...state, producers: action.payload, producersFromApi: action.payload};
    case ProductsActionsTypes.SORT_PRODUCTS:
      return {...state, products: action.payload};
    case ProductsActionsTypes.FILTER_PRODUCTS:
      return {...state, products: action.payload};
    case ProductsActionsTypes.REFRESH_PRODUCTS_ARRAY:
      return {...state, products: action.payload};
    case ProductsActionsTypes.FILTER_PRODUCERS:
      return {...state, producers: action.payload};
    case ProductsActionsTypes.REFRESH_PRODUCERS:
      return {...state, producers: action.payload};
    default:
      return state;
  }
};