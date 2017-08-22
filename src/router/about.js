import asyncComponent from 'utils/asyncComponent';

const About = asyncComponent(() => import(/* webpackChunkName: "about" */'cts/about').then(module => module.default), { name: 'About' });

export default About;