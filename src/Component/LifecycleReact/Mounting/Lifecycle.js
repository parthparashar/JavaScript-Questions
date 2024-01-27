import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props){
        super(props);
        this.state={
            count : 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
        console.log(this.state.count,"count");
    }
    render() {
        return (
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>checkB</button>
        </div>
        )
    }
}
