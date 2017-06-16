import Layout from '../layout/layout';
import Home from './home';
import Product from './product';
import Solution from './solution';

const routes = [
    {
        component: Layout,
        routes: [
            {
                path: '/home',
                exact: true,
                component: Home
            }, {
                path: '/product',
                exact: true,
                component: Product
            }, {
                path: '/solution',
                exact: true,
                component: Solution
            }
        ]
    }
]

export default routes;
