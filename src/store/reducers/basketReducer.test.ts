import { BasketActions, BasketActionsTypes, BasketState } from "../../types/basket";
import { basketReducer } from "./basketReducer";

describe("Testing basket reducer", () => {
  const state: BasketState = {
    basket: [
      {
        id: '200300',
        price: 500,
        amount: 2,
        name: 'Shampoo',
        brand: `L'Oreal`,
        image: 'Image url',
        sizeType: 'volume',
        size: 200,
        description: 'Shampoo description'
      },
      {
        id: '200500',
        price: 1000,
        amount: 1,
        name: 'Shampoo 2',
        brand: `L'Oreal`,
        image: 'Image url',
        sizeType: 'volume',
        size: 200,
        description: 'Shampoo 2 description'
      },
    ],
    totalSum: 2000,
    totalAmount: 3
  };

  it("Adding item to basket", () => {
    const modifiedState = basketReducer(state, {
      type: BasketActionsTypes.ADD_TO_BASKET,
      payload: {basket: [...state.basket, {
          id: '200600',
          price: 600,
          amount: 1,
          name: 'Shampoo 3',
          brand: `L'Oreal`,
          image: 'Image url',
          sizeType: 'volume',
          size: 200,
          description: 'Shampoo 3 description'
        }],
        totalSum: 2600,
        totalAmount: 4
      }
    } as BasketActions);
    expect(modifiedState.totalAmount).toBe(4);
    expect(modifiedState.totalSum).toBe(2600);
  });
  it("Reset basket", () => {
    const modifiedState = basketReducer(state, {type: BasketActionsTypes.RESET_BASKET} as BasketActions);
    expect(modifiedState.totalAmount).toBe(0);
    expect(modifiedState.totalSum).toBe(0);
    expect(modifiedState.basket).toEqual([]);
  });
});