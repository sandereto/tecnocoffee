import React, { Component } from 'react'

export default class form extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit || ''}>
                <div className="card-body">
                    {this.props.children}
                </div>
            </form>
        )
    }
}
