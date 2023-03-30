export interface Product {
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
  [id: string]: Product
}

export interface ProductMutation extends Product {
  id: string;
}

export interface ProductsState {
  products: ProductMutation[],
  productsFromApi: ProductMutation[],
  producers: Producers | null,
  producersFromApi: Producers | null,
  oneProduct: Product | null,
  oneProductFetchLoading: boolean,
  oneProductFetchError: null | string,
  fetchLoading: boolean,
  fetchError: null | string,
}

export enum ProductsActionsTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
  FETCH_ONE_PRODUCT = 'FETCH_ONE_PRODUCT',
  FETCH_ONE_PRODUCT_SUCCESS = 'FETCH_ONE_PRODUCT_SUCCESS',
  FETCH_ONE_PRODUCT_FAILURE = 'FETCH_ONE_PRODUCT_FAILURE',
  GET_ALL_PRODUCERS = 'GET_ALL_PRODUCERS',
  SORT_PRODUCTS = 'SORT_PRODUCTS',
  FILTER_PRODUCTS = 'FILTER_PRODUCTS',
  REFRESH_PRODUCTS_ARRAY = 'REFRESH_PRODUCTS_ARRAY',
  REFRESH_PRODUCERS = 'REFRESH_PRODUCERS',
  FILTER_PRODUCERS = 'FILTER_PRODUCERS',
}

export interface FetchProducts {
  type: ProductsActionsTypes.FETCH_PRODUCTS,
}

export interface FetchProductsSuccess {
  type: ProductsActionsTypes.FETCH_PRODUCTS_SUCCESS,
  payload: ProductMutation[],
}

export interface FetchProductsFailure {
  type: ProductsActionsTypes.FETCH_PRODUCTS_FAILURE,
  payload: string,
}

export interface FetchOneProduct {
  type: ProductsActionsTypes.FETCH_ONE_PRODUCT,
}

export interface FetchOneProductSuccess {
  type: ProductsActionsTypes.FETCH_ONE_PRODUCT_SUCCESS,
  payload: Product | null,
}

export interface FetchOneProductFailure {
  type: ProductsActionsTypes.FETCH_ONE_PRODUCT_FAILURE,
  payload: string,
}

export interface GetAllProducers {
  type: ProductsActionsTypes.GET_ALL_PRODUCERS,
  payload: Producers,
}

export interface SortProducts {
  type: ProductsActionsTypes.SORT_PRODUCTS,
  payload: ProductMutation[],
}

export interface FilterProducts {
  type: ProductsActionsTypes.FILTER_PRODUCTS,
  payload: ProductMutation[],
}

export interface RefreshProductsArray {
  type: ProductsActionsTypes.REFRESH_PRODUCTS_ARRAY,
  payload: ProductMutation[],
}

export interface FilterProducers {
  type: ProductsActionsTypes.FILTER_PRODUCERS,
  payload: Producers,
}

export interface RefreshProducers {
  type: ProductsActionsTypes.REFRESH_PRODUCERS,
  payload: Producers,
}

export type ProductsActions =
  FetchProducts | FetchProductsSuccess | FetchProductsFailure |
  GetAllProducers | SortProducts | FilterProducts |
  RefreshProductsArray | FilterProducers | RefreshProducers |
  FetchOneProduct | FetchOneProductSuccess | FetchOneProductFailure
  ;