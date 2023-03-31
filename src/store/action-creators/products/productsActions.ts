import { Dispatch } from "redux";
import {
  ApiProducts,
  Producers,
  Product,
  ProductMutation,
  ProductsActions,
  ProductsActionsTypes
} from "../../../types/products";
import { store } from "../../index";
import axiosApi from "../../../axiosApi";

export const fetchProductsFromApi = () => {
  return async (dispatch: Dispatch<ProductsActions>) => {
    try {
      dispatch({type: ProductsActionsTypes.FETCH_PRODUCTS});

      const response = await axiosApi.get<ApiProducts | null>('/catalog.json');

      const data = response.data;

      if (data) {
        const productsArray: ProductMutation[] = Object.keys(data).map(id => ({
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

        localStorage.setItem('catalogProducts', JSON.stringify(productsArray));
      } else {
        dispatch({
          type: ProductsActionsTypes.FETCH_PRODUCTS_SUCCESS,
          payload: []
        });
        localStorage.setItem('catalogProducts', JSON.stringify([]));
      }
    } catch (e) {
      dispatch({
        type: ProductsActionsTypes.FETCH_PRODUCTS_FAILURE,
        payload: 'Произошла ошибка при загрузке товаров!'
      });
    }
  };
};

export const fetchOneProductFromApi = (productId: string) => {
  return async (dispatch: Dispatch<ProductsActions>) => {
    try {
      dispatch({type: ProductsActionsTypes.FETCH_ONE_PRODUCT});
      const response = await axiosApi.get<Product | null>(`/catalog/${productId}.json`);

      if(response.data) {
        dispatch({
          type: ProductsActionsTypes.FETCH_ONE_PRODUCT_SUCCESS,
          payload: response.data
        });
      } else {
        return new Error();
      }
    } catch (e) {
      dispatch({
        type: ProductsActionsTypes.FETCH_ONE_PRODUCT_FAILURE,
        payload: 'Товар с данным идентификатором отсутствует'
      });
    }
  }
};

export const sortProducts = (value: string) => {
  return (dispatch: Dispatch<ProductsActions>) => {
    const products = store.getState().products.products;

    const arrayCopy: ProductMutation[] = [...products];

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
    const productsLocalStorage = store.getState().products.productsLocalStorage;

    dispatch({
      type: ProductsActionsTypes.REFRESH_PRODUCTS_ARRAY,
      payload: [...productsLocalStorage]
    });

    const productsArray = store.getState().products.products;
    const productsArrayCopy = [...productsArray];

    let filteredProducts: ProductMutation[] = [];

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

export const filterProducers = (value: string) => {
  return (dispatch: Dispatch<ProductsActions>) => {
    const producers = store.getState().products.producers;

     if(producers) {
       const producerObj = Object.fromEntries(Object.entries(producers)
         .filter(([key]) => key.includes(value)))
       ;

       dispatch({
         type: ProductsActionsTypes.FILTER_PRODUCERS,
         payload: producerObj
       });
     }
  }
};

export const refreshProducers = () => {
  return (dispatch: Dispatch<ProductsActions>) => {
    const producersFullList = store.getState().products.producersFullList;

    dispatch({
      type: ProductsActionsTypes.REFRESH_PRODUCERS,
      payload: {...producersFullList}
    });
  }
};

export const refreshProducts = () => {
  return (dispatch: Dispatch<ProductsActions>) => {
    const productsLocalStorage = store.getState().products.productsLocalStorage;

    dispatch({
      type: ProductsActionsTypes.REFRESH_PRODUCTS_ARRAY,
      payload: [...productsLocalStorage]
    });
  }
};