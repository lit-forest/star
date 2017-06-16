import asyncComponent from 'utils/asyncComponent';

const Solution = asyncComponent(() => import('cts/solution').then(module => module.default), { name: 'Solution' });

export default Solution;