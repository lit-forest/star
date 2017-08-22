import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './about.scss';

class About extends Component {
    render() {
        return (
            <main className={styles.root}>
                <h1>关于我们</h1>
            </main>
        );
    }
}


export default About;