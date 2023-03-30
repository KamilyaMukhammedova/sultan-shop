import { store } from "../../index";
import { BasketActions, BasketActionsTypes, BasketProduct } from "../../../types/basket";
import { Dispatch } from "redux";

export const addToBasket = (productId: string, price: number, amount = 1) => {
  return (dispatch: Dispatch<BasketActions>) => {
    const basketArray = store.getState().basket.basket;
    let newBasketArray: BasketProduct[] = [];

    const product = basketArray.find(item => item.id === productId);

    if (product) {
      newBasketArray = basketArray.map(item => {
        if (item.id === productId) {
          return {
            ...item,
            amount: item.amount + amount
          }
        }

        return item;
      });
    } else {
      newBasketArray = [...basketArray, {id: productId, price, amount}];
    }

    const totalAmount = newBasketArray.reduce((acc, item) => acc + item.amount, 0);
    const totalSum = newBasketArray.reduce((acc, item) => acc + (item.amount * item.price), 0);

    dispatch({
      type: BasketActionsTypes.ADD_TO_BASKET,
      payload: {
        basket: newBasketArray,
        totalAmount,
        totalSum
      }
    });
  }
};