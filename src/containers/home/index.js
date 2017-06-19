import React, { Component } from 'react';
import styles from './home.scss';

class Home extends Component {
    render() {
        return (
            <div className={styles.root}>
                <h1>Home</h1>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;