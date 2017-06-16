import asyncComponent from 'utils/asyncComponent';
import { injectReducer } from 'utils/reducers'
import reducer from 'cts/product/modules/product'

const Product = asyncComponent(() => import('cts/product').then(module => {
    console.log('进入product');
    injectReducer({ key: 'product', reducer });
    return module.default
}), { name: 'Product' });

export default Product;