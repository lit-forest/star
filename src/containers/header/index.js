import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';

import styles from './header.scss';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            val: 0
        }
    }
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
                            <NavLink to='/1' activeClassName={styles.selected} className={styles.nav_item_a}>服务支持</NavLink>
                        </li>
                        <li className={styles.nav_item}>
                            <NavLink to='/2' activeClassName={styles.selected} className={styles.nav_item_a}>关于我们</NavLink>
                        </li>
                        <li className={styles.nav_item}>
                            <NavLink to='/3' activeClassName={styles.selected} className={styles.nav_item_a}>新闻中心</NavLink>
                        </li>
                        <li className={styles.nav_item}>
                            <NavLink to='/4' activeClassName={styles.selected} className={styles.nav_item_a}>供应商平台</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
    componentDidMount() {

        this.setState({
            val: this.state.val + 1
        })
        console.log(this.state.val);   //0

        this.setState(() => {
            return {
                val: this.state.val + 1
            }
        })
        console.log(this.state.val)    //0

        setTimeout(() => {
            this.setState(() => {
                return {
                    val: this.state.val + 1
                }
            })
            console.log(this.state.val)

            this.setState({
                val: this.state.val + 1
            })
            console.log(this.state.val);  //2
            this.setState({
                val: this.state.val + 1
            })
            console.log(this.state.val);   //3
        }, 0);
    }
}

export default Header;
