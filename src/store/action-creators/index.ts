import * as ProductsActionCreators from './products/productsActions';
import * as BasketActionCreators from './basket/basketActions';
import * as AdminActionCreators from './admin/adminActions';

export default {
  ...ProductsActionCreators,
  ...BasketActionCreators,
  ...AdminActionCreators,
}