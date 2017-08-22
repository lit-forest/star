import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';

import styles from './header.scss';

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <LoadingBar style={{ backgroundColor: '#00BCD4', height: '2px' }} />

                <NavLink to='/home' className={styles.logo}>
                    <h1>home</h1>
                </NavLink>
                <div className={styles.section}>
                    <ul className={styles.nav}>
                        <li className={styles.nav_item}>
                            <NavLink to='/' exact={true} activeClassName={styles.selected} className={styles.nav_item_a}>首页</NavLink>
                        </li>
                        <li className={styles.nav_item}>
                            <NavLink to='/product' activeClassName={styles.selected} className={styles.nav_item_a}>产品中心</NavLink>
                        </li>
                        <li className={styles.nav_item}>
                            <NavLink to='/solution' activeClassName={styles.selected} className={styles.nav_item_a}>解决方案</NavLink>
                        </li>
                        <li className={styles.nav_item}>
                            <NavLink to='/support' activeClassName={styles.selected} className={styles.nav_item_a}>服务支持</NavLink>
                        </li>
                        <li className={styles.nav_item}>
                            <NavLink to='/about' activeClassName={styles.selected} className={styles.nav_item_a}>联系我们</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
