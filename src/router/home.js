import asyncComponent from 'utils/asyncComponent';

const Home = asyncComponent(() => import(/* webpackChunkName: "home" */'cts/home').then(module => module.default), { name: 'Home' });

export default Home;