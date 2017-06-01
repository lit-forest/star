import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <header className="header">
        <a href='/' className='logo'>
          <h1>home</h1>
        </a>
        <div className='header-section'>
          <ul className='nav'>
            <li className='nav-item'><a href='/' className='nav-item-a'>All Products</a></li>
            <li className='nav-item'><a href='/' className='nav-item-a'>UI Kits</a></li>
            <li className='nav-item'><a href='/' className='nav-item-a'>Wireframe Kits</a></li>
            <li className='nav-item'><a href='/' className='nav-item-a'>For Sketch</a></li>
            <li className='nav-item'><a href='/' className='nav-item-a'>Icons</a></li>
            <li className='nav-item'><a href='/' className='nav-item-a'>Fonts</a></li>
            <li className='nav-item'><a href='/' className='nav-item-a'>Mockups</a></li>
            <li className='nav-item'><a href='/' className='nav-item-a'>Presentation</a></li>
            <li className='nav-item'><a href='/' className='nav-item-a'>Icons</a></li>
          </ul>
        </div>
      </header>
    );
  }
}

export default App;
