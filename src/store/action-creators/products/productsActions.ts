import { Dispatch } from "redux";
import axios from "axios";
import {
  ApiProducts,
  Producers,
  ProductsActions,
  ProductsActionsTypes,
  ProductsMutation
} from "../../../types/products";
import { store } from "../../index";

const API_URL = 'https://sultan-shop-1c970-default-rtdb.europe-west1.firebasedatabase.app/catalog.json';

export const fetchProductsFromApi = () => {
  return async (dispatch: Dispatch<ProductsActions>) => {
    try {
      dispatch({type: ProductsActionsTypes.FETCH_PRODUCTS});

      const response = await axios.get<ApiProducts | null>(API_URL);

      const data = response.data;

      if (data) {
        const productsArray: ProductsMutation[] = Object.keys(data).map(id => ({
          ...data[id],
          id
        }));

        const producersObject: Producers = {};

        productsArray.forEach(item => {
          if (producersObject.hasOwnProperty(item.producer)) {
            producersObject[item.producer]++;
          } else {
            producersObject[item.producer] = 1;
          }
        });

        dispatch({
          type: ProductsActionsTypes.FETCH_PRODUCTS_SUCCESS,
          payload: productsArray
        });

        dispatch({
          type: ProductsActionsTypes.GET_ALL_PRODUCERS,
          payload: producersObject
        });
      } else {
        dispatch({
          type: ProductsActionsTypes.FETCH_PRODUCTS_SUCCESS,
          payload: []
        });
      }
    } catch (e) {
      dispatch({
        type: ProductsActionsTypes.FETCH_PRODUCTS_FAILURE,
        payload: 'Произошла ошибка при загрузке товаров!'
      });
    }
  };
};

export const sortProducts = (value: string, productsArray: ProductsMutation[]) => {
  return (dispatch: Dispatch<ProductsActions>) => {
    const arrayCopy: ProductsMutation[] = [...productsArray];

    if (value === 'A-Z') {
      arrayCopy.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (value === 'Z-A') {
      arrayCopy.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (value === 'min-max') {
      arrayCopy.sort((a, b) => a.price - b.price);
    }

    if (value === 'max-min') {
      arrayCopy.sort((a, b) => b.price - a.price);
    }

    dispatch({
      type: ProductsActionsTypes.SORT_PRODUCTS,
      payload: arrayCopy
    });
  }
};

export const filterProducts = (priceFrom: number, priceTo: number, producers: string[]) => {
  return (dispatch: Dispatch<ProductsActions>) => {
    const apiProductsArray = store.getState().products.productsFromApi;

    dispatch({
      type: ProductsActionsTypes.REFRESH_PRODUCTS_ARRAY,
      payload: [...apiProductsArray]
    });

    const productsArray = store.getState().products.products;
    const productsArrayCopy = [...productsArray];

    let filteredProducts: ProductsMutation[] = [];

    if (producers.length > 0) {
      filteredProducts = productsArrayCopy.filter(product => {
        return product.price >= priceFrom && product.price <= priceTo && producers.includes(product.producer);
      });
    } else {
      filteredProducts = productsArrayCopy.filter(product => {
        return product.price >= priceFrom && product.price <= priceTo;
      });
    }

    dispatch({
      type: ProductsActionsTypes.FILTER_PRODUCTS,
      payload: filteredProducts
    });
  }
};