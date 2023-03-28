export interface Products {
  image: string,
  name: string,
  sizeType: string,
  size: number,
  barcode: number,
  producer: string,
  brand: string,
  description?: string;
  price: number,
  type: string[],
}

export interface Producers {
  [key: string]: number
}

export interface ApiProducts {
  [id: string]: Products
}

export interface ProductsMutation extends Products {
  id: string;
}

export interface ProductsState {
  products: ProductsMutation[];
  producers: Producers | null,
  fetchLoading: boolean;
  fetchError: null | string;
}

export enum ProductsActionsTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
  GET_ALL_PRODUCERS = 'GET_ALL_PRODUCERS',
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

export interface GetAllProducers {
  type: ProductsActionsTypes.GET_ALL_PRODUCERS,
  payload: Producers,
}

export type ProductsActions = FetchProducts | FetchProductsSuccess | FetchProductsFailure | GetAllProducers;