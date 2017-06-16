import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';
import { updateLocation } from './location';
import { history } from '../layout';

const router_Middleware = routerMiddleware(history);

export default (initialState = {}) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
    const middleware = [promiseMiddleware(), thunk, router_Middleware, loadingBarMiddleware()]

    // ======================================================
    // Store Enhancers
    // ======================================================
    const enhancers = []
    // if (__DEV__) {
    //   const devToolsExtension = window.devToolsExtension
    //   if (typeof devToolsExtension === 'function') {
    //     enhancers.push(devToolsExtension())
    //   }
    // }

    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
    const store = createStore(
        makeRootReducer(),
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )
    )
    store.asyncReducers = {}

    // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
    store.unsubscribeHistory = history.listen(updateLocation(store))

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const reducers = require('./reducers').default
            store.replaceReducer(reducers(store.asyncReducers))
        })
    }

    return store
}