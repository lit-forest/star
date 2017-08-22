import asyncComponent from 'utils/asyncComponent';

const Support = asyncComponent(() => import(/* webpackChunkName: "support" */'cts/support').then(module => module.default), { name: 'Support' });

export default Support;