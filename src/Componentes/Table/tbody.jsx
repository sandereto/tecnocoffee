import React, { Component } from 'react'

export default class tbody extends Component {
    render() {
        return (
            <tbody>               
                {this.props.children}                  
            </tbody>
        )
    }
}
