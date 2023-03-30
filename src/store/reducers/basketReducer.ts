import { BasketActions, BasketActionsTypes, BasketState } from "../../types/basket";

const initialState: BasketState = {
  basket: [],
  totalAmount: 0,
  totalSum: 0
};

export const basketReducer = (state = initialState, action: BasketActions): BasketState => {
  switch (action.type) {
    case BasketActionsTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: action.payload.basket,
        totalSum: action.payload.totalSum,
        totalAmount: action.payload.totalAmount
      };
    default:
      return state;
  }
};
