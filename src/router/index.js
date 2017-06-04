import Home from '../containers/home';
import Product from '../containers/product';
import Solution from '../containers/solution';

const routes = [{
    component: Home,
    routes: [{
        path: '/',
        exact: true,
        component: Home
    }, {
        path: '/product',
        exact: true,
        component: Home
    }, {
        path: '/solution',
        exact: true,
        component: Home
    }]
}]

export default routes;