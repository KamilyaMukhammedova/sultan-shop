interface Products {
  image: string,
  name: string,
  sizeType: string,
  size: number,
  barcode: number,
  producer: string,
  brand: string,
  description: string;
  price: number,
  type: string[],
}

export interface ApiProducts {
  [id: string]: Products
}

export interface ProductsMutation extends Products {
  id: string;
}

export interface ProductsState {
  products: ProductsMutation[];
  fetchLoading: boolean;
  fetchError: null | string;
}

export enum ProductsActionsTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
}

export interface FetchProducts {
  type: ProductsActionsTypes.FETCH_PRODUCTS,
}

export interface FetchProductsSuccess {
  type: ProductsActionsTypes.FETCH_PRODUCTS_SUCCESS,
  payload: ProductsMutation[],
}

export interface FetchProductsFailure {
  type: ProductsActionsTypes.FETCH_PRODUCTS_FAILURE,
  payload: string,
}

export type ProductsActions = FetchProducts | FetchProductsSuccess | FetchProductsFailure;