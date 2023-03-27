import { Dispatch } from "redux";
import axios from "axios";
import {
  ApiProducts,
  Producers,
  ProductsActions,
  ProductsActionsTypes,
  ProductsMutation
} from "../../../types/products";

const API_URL = 'https://sultan-shop-1c970-default-rtdb.europe-west1.firebasedatabase.app/catalog.json';

export const fetchProductsFromApi = () => {
  return async (dispatch: Dispatch<ProductsActions>) => {
    try {
      dispatch({type: ProductsActionsTypes.FETCH_PRODUCTS});

      const response = await axios.get<ApiProducts | null>(API_URL);

      const data = response.data;
      console.log(data);

      if (data) {
        const productsArray: ProductsMutation[] = Object.keys(data).map(id => ({
          ...data[id],
          id
        }));

        const producersObject: Producers = {};

        productsArray.forEach(item => {
          if(producersObject.hasOwnProperty(item.producer)) {
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