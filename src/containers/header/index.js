import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';

import './header.scss';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <LoadingBar style={{ backgroundColor: '#00BCD4', height: '2px' }} />
                <NavLink to='/home' className='logo'>
                    <h1>home</h1>
                </NavLink>
                <div className='header-section'>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <NavLink to='/home' activeClassName='selected' className='nav-item-a'>首页</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/product' activeClassName='selected' className='nav-item-a'>产品中心</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/solution' activeClassName='selected' className='nav-item-a'>解决方案</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/1' activeClassName='selected' className='nav-item-a'>服务支持</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/2' activeClassName='selected' className='nav-item-a'>关于我们</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/3' activeClassName='selected' className='nav-item-a'>新闻中心</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/4' activeClassName='selected' className='nav-item-a'>供应商平台</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
