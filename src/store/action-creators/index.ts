import * as ProductsActionCreators from './products/productsActions';
import * as BasketActionCreators from './basket/basketActions';

export default {
  ...ProductsActionCreators,
  ...BasketActionCreators,
}