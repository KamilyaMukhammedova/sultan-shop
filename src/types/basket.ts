export interface BasketProduct {
  id: string,
  price: number,
  amount: number
}

export interface BasketState {
  basket: BasketProduct[],
  totalAmount: number,
  totalSum: number
}

export enum BasketActionsTypes {
   ADD_TO_BASKET = 'ADD_TO_BASKET'
}

export interface AddToBasket {
  type: BasketActionsTypes.ADD_TO_BASKET,
  payload: {
    basket: BasketProduct[],
    totalAmount: number,
    totalSum: number
  }
}

export type BasketActions = AddToBasket;



