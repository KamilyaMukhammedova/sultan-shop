import { Dispatch } from "redux";
import { store } from "../../index";
import { BasketActions, BasketActionsTypes, BasketProduct } from "../../../types/basket";

const countTotalAmount = (arr: BasketProduct[]) => {
  return arr.reduce((acc, item) => acc + item.amount, 0);
};

const countTotalSum = (arr: BasketProduct[]) => {
  return arr.reduce((acc, item) => acc + (item.amount * item.price), 0);
};

export const addToBasket = (productId: string, amount = 1) => {
  return (dispatch: Dispatch<BasketActions>) => {
    const productsLocalStorage = store.getState().products.productsApi;
    const basketArray = store.getState().basket.basket;

    let copyBasketArray: BasketProduct[] = [];

    const product = basketArray.find(item => item.id === productId);

    if (product) {
      copyBasketArray = basketArray.map(item => {
        if (item.id === product.id) {
          return {
            ...item,
            amount: item.amount + amount
          }
        }

        return item;
      });
    } else {
      const newProductInBasket = productsLocalStorage.find(item => item.id === productId);

      if (newProductInBasket) {
        copyBasketArray = [...basketArray, {
          id: newProductInBasket.id,
          price: newProductInBasket.price,
          amount,
          name: newProductInBasket.name,
          brand: newProductInBasket.brand,
          image: newProductInBasket.image,
          sizeType: newProductInBasket.sizeType,
          size: newProductInBasket.size,
          description: newProductInBasket.description,
        }];
      } else {
        copyBasketArray = [...basketArray];
      }
    }

    const totalAmount = countTotalAmount(copyBasketArray);
    const totalSum = countTotalSum(copyBasketArray);

    dispatch({
      type: BasketActionsTypes.ADD_TO_BASKET,
      payload: {
        basket: copyBasketArray,
        totalAmount,
        totalSum
      }
    });
  };
};

export const decreaseProductAmountInBasket = (productId: string) => {
  return (dispatch: Dispatch<BasketActions>) => {
    const basketArray = store.getState().basket.basket;

    const product = basketArray.find(item => item.id === productId);

    if (product) {
      const copyBasketArray = basketArray.map(item => {
        if (item.id === product.id) {
          return {
            ...item,
            amount: item.amount - 1
          }
        }

        return item;
      });

      const totalAmount = countTotalAmount(copyBasketArray);
      const totalSum = countTotalSum(copyBasketArray);

      dispatch({
        type: BasketActionsTypes.DECREASE_PRODUCT_AMOUNT_IN_BASKET,
        payload: {
          basket: copyBasketArray,
          totalAmount,
          totalSum
        }
      });
    }
  };
};

export const removeProductFromBasket = (productId: string) => {
  return (dispatch: Dispatch<BasketActions>) => {
    const basketArray = store.getState().basket.basket;

    const copyBasketArray = basketArray.filter(item => item.id !== productId);

    const totalAmount = countTotalAmount(copyBasketArray);
    const totalSum = countTotalSum(copyBasketArray);

    dispatch({
      type: BasketActionsTypes.REMOVE_PRODUCT_FROM_BASKET,
      payload: {
        basket: copyBasketArray,
        totalAmount,
        totalSum
      }
    });
  };
};

export const resetBasket = () => {
  return (dispatch: Dispatch<BasketActions>) => {
    dispatch({ type: BasketActionsTypes.RESET_BASKET });
  };
};
