import React from 'react';
import Layout from '../layout/layout';
import Home from './home';
import Product from './product';
import Solution from './solution';

const routes = [
    {
        component: Layout,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/product',
                exact: true,
                component: Product
            }, {
                path: '/solution',
                exact: true,
                component: Solution
            }, {
                path: '/1',
                exact: true,
                render: () => <h1>hello 1</h1>
            }
        ]
    }
]

export default routes;
