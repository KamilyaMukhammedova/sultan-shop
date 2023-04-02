import { ProductsActions, ProductsActionsTypes, ProductsState } from "../../types/products";
import { AdminActions, AdminActionsTypes } from "../../types/admin";

const initialState: ProductsState = {
  productsApi: [],
  products: [],
  producers: null,
  producersFullList: null,
  oneProduct: null,
  filterTypeName: '',
  filterIsOn: false,
  oneProductFetchLoading: false,
  oneProductFetchError: null,
  fetchLoading: false,
  fetchError: null,
  createProductLoading: false,
  createProductError: null
};

export const productsReducer = (
  state = initialState,
  action: ProductsActions | AdminActions
): ProductsState => {
  switch (action.type) {
    case ProductsActionsTypes.FETCH_PRODUCTS:
      return {...state, fetchLoading: true, fetchError: null};
    case ProductsActionsTypes.FETCH_PRODUCTS_SUCCESS:
      return {...state, fetchLoading: false, products: action.payload, productsApi: action.payload};
    case ProductsActionsTypes.FETCH_PRODUCTS_FAILURE:
      return {...state, fetchLoading: false, fetchError: action.payload};
    case ProductsActionsTypes.FETCH_ONE_PRODUCT:
      return {...state, oneProductFetchLoading: true, oneProductFetchError: null};
    case ProductsActionsTypes.FETCH_ONE_PRODUCT_SUCCESS:
      return {...state, oneProductFetchLoading: false, oneProduct: action.payload};
    case ProductsActionsTypes.FETCH_ONE_PRODUCT_FAILURE:
      return {...state, oneProductFetchLoading: false, oneProductFetchError: action.payload};
    case ProductsActionsTypes.GET_ALL_PRODUCERS:
      return {...state, producers: action.payload, producersFullList: action.payload};
    case ProductsActionsTypes.SORT_PRODUCTS:
      return {...state, products: action.payload};
    case ProductsActionsTypes.FILTER_PRODUCTS:
      return {...state, products: action.payload};
    case ProductsActionsTypes.FILTER_PRODUCTS_BY_TYPE:
      return {...state, products: action.payload};
    case ProductsActionsTypes.SET_FILTER_TYPE_NAME:
      return {...state, filterTypeName: action.payload};
    case ProductsActionsTypes.SET_FILTER_ON_OFF:
      return {...state, filterIsOn: action.payload};
    case ProductsActionsTypes.REFRESH_PRODUCTS_ARRAY:
      return {...state, products: action.payload};
    case ProductsActionsTypes.FILTER_PRODUCERS:
      return {...state, producers: action.payload};
    case ProductsActionsTypes.REFRESH_PRODUCERS:
      return {...state, producers: action.payload};
    case AdminActionsTypes.CREATE_NEW_PRODUCT:
      return {...state, createProductLoading: true, createProductError: null};
    case AdminActionsTypes.CREATE_NEW_PRODUCT_SUCCESS:
      return {...state, createProductLoading: false, createProductError: null};
    case AdminActionsTypes.CREATE_NEW_PRODUCT_FAILURE:
      return {...state, createProductLoading: false, createProductError: action.payload};
    default:
      return state;
  }
};