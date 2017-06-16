import asyncComponent from 'utils/asyncComponent';

const Home = asyncComponent(() => import('../containers/home').then(module => module.default), { name: 'Home' });

export default Home;