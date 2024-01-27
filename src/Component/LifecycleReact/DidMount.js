import React, { Component } from 'react'

export default class DidMount extends Component {
    constructor(props) 
    {
        super(props);
        this.state = {favoritefood: "rice"};
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({favoritefood: "pizza"})
        }, 1000)
    }
    render() {
        return (
            <h1>My Favorite Food is {this.state.favoritefood}</h1>
        );
    }
}
