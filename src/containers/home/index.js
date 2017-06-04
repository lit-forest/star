import React, { Component } from 'react';
import './Home.scss';

import { getData } from 'api/Home'

class Home extends Component {
    componentDidMount() {
        getData(1).then(data => {
            console.log(data)
        });
    }

    render() {
        return (
            <header className='header'>
                <a href='/' className='logo'>
                    <h1>home</h1>
                </a>
                <div className='header-section'>
                    <ul className='nav'>
                        <li className='nav-item'><a href='/' className='nav-item-a'>首页</a></li>
                        <li className='nav-item'><a href='/' className='nav-item-a'>产品中心</a></li>
                        <li className='nav-item'><a href='/' className='nav-item-a'>解决方案</a></li>
                        <li className='nav-item'><a href='/' className='nav-item-a'>服务支持</a></li>
                        <li className='nav-item'><a href='/' className='nav-item-a'>关于我们</a></li>
                        <li className='nav-item'><a href='/' className='nav-item-a'>新闻中心</a></li>
                        <li className='nav-item'><a href='/' className='nav-item-a'>供应商平台</a></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Home;
