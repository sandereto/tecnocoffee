import React, { Component } from 'react'

export default class thead extends Component {
    render() {
        return (
            <thead>
                <tr>
                    {this.props.children}
                </tr>
            </thead>
        )
    }
}
