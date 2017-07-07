import React, { Component } from 'react';

class Test extends Component {
    constructor() {
        super();
        this.state={
            value:1
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            value:nextProps.value
        })
    }
    
    render() {
        console.log('rendering')
        return (
            <div>
                <h1>{this.props.value}</h1>
                <h2>{this.state.value}</h2>
            </div>

        );
    }
}

export default Test;