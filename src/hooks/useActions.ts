import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ProductsActionCreators from '../store/action-creators/products/productsActions';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ProductsActionCreators, dispatch);
};