import { Dispatch } from "redux";
import axiosApi from "../../../axiosApi";
import { ModeActions, ModeActionsTypes } from "../../../types/mode";
import { ApiProducts, Product } from "../../../types/products";
import { AdminActions, AdminActionsTypes } from "../../../types/admin";

export const manageMode = (isAdmin: boolean) => {
  return (dispatch: Dispatch<ModeActions>) => {
    dispatch({
      type: ModeActionsTypes.SET_MODE,
      payload: isAdmin
    });
  }
};

export const createNewProduct = (productData: Product) => {
  return async (dispatch: Dispatch<AdminActions>) => {
    try {
      dispatch({type: AdminActionsTypes.CREATE_NEW_PRODUCT});

      const response = await axiosApi.post<ApiProducts | null>('/catalog.json', productData);

      if(response.status === 200) {
        dispatch({type: AdminActionsTypes.CREATE_NEW_PRODUCT_SUCCESS});
      }
    } catch (e) {
      dispatch({
        type: AdminActionsTypes.CREATE_NEW_PRODUCT_FAILURE,
        payload: 'Произошла ошибка при создании нового продукта!'
      });
    }
  }
};

export const editProduct = (productData: Product, id: string) => {
  return async (dispatch: Dispatch<AdminActions>) => {
    try {
      dispatch({type: AdminActionsTypes.EDIT_PRODUCT});

      const response = await axiosApi.put<ApiProducts | null>(`/catalog/${id}.json`, productData);

      if(response.status === 200) {
        dispatch({type: AdminActionsTypes.EDIT_PRODUCT_SUCCESS});
      }
    } catch (e) {
      dispatch({
        type: AdminActionsTypes.EDIT_PRODUCT_FAILURE,
        payload: 'Произошла ошибка при редактировании продукта!'
      });
    }
  }
};