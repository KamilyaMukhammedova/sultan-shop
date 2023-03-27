import { Dispatch } from "redux";
import axios from "axios";
import { ApiProducts, ProductsActions, ProductsActionsTypes, ProductsMutation } from "../../../types/products";

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
        dispatch({
          type: ProductsActionsTypes.FETCH_PRODUCTS_SUCCESS,
          payload: productsArray
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