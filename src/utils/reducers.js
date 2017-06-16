import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import locationReducer from './location';
import { store } from '../layout';

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        router: routerReducer,
        location: locationReducer,
        ...asyncReducers,
        loadingBar: loadingBarReducer
    })
}

export const injectReducer = ({ key, reducer }) => {
    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer