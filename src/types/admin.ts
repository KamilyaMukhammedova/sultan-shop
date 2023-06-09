export enum AdminActionsTypes {
  CREATE_NEW_PRODUCT = 'CREATE_NEW_PRODUCT',
  CREATE_NEW_PRODUCT_SUCCESS = 'CREATE_NEW_PRODUCT_SUCCESS',
  CREATE_NEW_PRODUCT_FAILURE = 'CREATE_NEW_PRODUCT_FAILURE',
  EDIT_PRODUCT = 'EDIT_PRODUCT',
  EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS',
  EDIT_PRODUCT_FAILURE = 'EDIT_PRODUCT_FAILURE',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS',
  REMOVE_PRODUCT_FAILURE = 'REMOVE_PRODUCT_FAILURE',
}

export interface CreateNewProduct {
  type: AdminActionsTypes.CREATE_NEW_PRODUCT
}

export interface CreateNewProductSuccess {
  type: AdminActionsTypes.CREATE_NEW_PRODUCT_SUCCESS,
}

export interface CreateNewProductFailure {
  type: AdminActionsTypes.CREATE_NEW_PRODUCT_FAILURE,
  payload: string
}

export interface EditProduct {
  type: AdminActionsTypes.EDIT_PRODUCT
}

export interface EditProductSuccess {
  type: AdminActionsTypes.EDIT_PRODUCT_SUCCESS,
}

export interface EditProductFailure {
  type: AdminActionsTypes.EDIT_PRODUCT_FAILURE,
  payload: string
}

export interface RemoveProduct {
  type: AdminActionsTypes.REMOVE_PRODUCT,
  payload: string
}

export interface RemoveProductSuccess {
  type: AdminActionsTypes.REMOVE_PRODUCT_SUCCESS,
  payload: string
}

export interface RemoveProductFailure {
  type: AdminActionsTypes.REMOVE_PRODUCT_FAILURE,
  payload: string[]
}

export type AdminActions = CreateNewProduct | CreateNewProductSuccess | CreateNewProductFailure
  | EditProduct | EditProductSuccess | EditProductFailure
  | RemoveProduct | RemoveProductSuccess | RemoveProductFailure;