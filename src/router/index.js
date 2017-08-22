import React from 'react';
import Layout from '../layout/layout';
import Home from './home';
import Product from './product';
import Solution from './solution';
import Support from './support';
import About from './about';

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
                path: '/support',
                exact: true,
                component: Support
            },
            {
                path: '/about',
                exact: true,
                component: About
            }
        ]
    }
]

export default routes;
