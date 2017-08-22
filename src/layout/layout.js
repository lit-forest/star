import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from 'cts/header';
import './layout.css'


class Layout extends Component {
    render() {
        const { route } = this.props;
        return (
            <div>
                <Header />
                {renderRoutes(route.routes)}
            </div>
        )
    }
}

Layout.propTypes = {
    route: PropTypes.object.isRequired,
}

export default Layout