export interface BasketProduct {
  id: string,
  price: number,
  amount: number,
  name: string,
  brand: string,
  image: string,
  sizeType: string,
  size: number,
  description: string
}

export interface BasketState {
  basket: BasketProduct[],
  totalAmount: number,
  totalSum: number
}

export enum BasketActionsTypes {
   ADD_TO_BASKET = 'ADD_TO_BASKET',
   REMOVE_PRODUCT_FROM_BASKET = 'REMOVE_PRODUCT_FROM_BASKET',
   DECREASE_PRODUCT_AMOUNT_IN_BASKET = 'DECREASE_PRODUCT_AMOUNT_IN_BASKET',
}

export interface AddToBasket {
  type: BasketActionsTypes.ADD_TO_BASKET,
  payload: {
    basket: BasketProduct[],
    totalAmount: number,
    totalSum: number
  }
}

export interface RemoveProductFromBasket {
  type: BasketActionsTypes.REMOVE_PRODUCT_FROM_BASKET,
  payload: {
    basket: BasketProduct[],
    totalAmount: number,
    totalSum: number
  }
}

export interface DecreaseProductAmountInBasket {
  type: BasketActionsTypes.DECREASE_PRODUCT_AMOUNT_IN_BASKET,
  payload: {
    basket: BasketProduct[],
    totalAmount: number,
    totalSum: number
  }
}

export type BasketActions = AddToBasket | DecreaseProductAmountInBasket | RemoveProductFromBasket;



