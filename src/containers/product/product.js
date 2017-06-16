import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './product.scss';

class Product extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: '5f18940da16191c19251d4bc11b56925',
            keywords: '北京大学',
            types: '高等院校',
            city: '北京',
            offset: 20,
            page: 1,
        }
    }

    componentWillMount() {
        this.props.searchPois(this.state);
    }
    inputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSearch = () => {
        this.props.searchPois(this.state);
    }
    handleSub = () => {
        this.props.sub();
    }
    render() {
        const { data } = this.props;
        console.log(data)
        return (
            <main className='root'>
                <label>搜索关键字：</label>
                <input type='text' name='keywords' onChange={this.inputChange} />
                <br />
                <label>搜索类型：</label>
                <input type='text' name='types' onChange={this.inputChange} />
                <br />
                <label>搜索城市：</label>
                <input type='text' name='city' onChange={this.inputChange} />
                <br />
                <button onClick={this.handleSearch}>search</button>
                <button onClick={this.handleSub}>sub</button>
                {data.pois.data.pois.map((item, index) => <h5 key={item.id}>{index}、{item.name}</h5>)}
            </main>
        );
    }
}

Product.propTypes = {
    searchPois: PropTypes.func.isRequired,
    sub: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
};

export default Product;