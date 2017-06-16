import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { renderRoutes } from 'react-router-config';
import routes from '../router';
import createStore from 'utils/createStore';


export const history = createHistory();

export const store = createStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    {renderRoutes(routes)}
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App