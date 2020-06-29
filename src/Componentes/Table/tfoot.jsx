import React, { Component } from 'react'

export default class tfoot extends Component {
    render() {
        return (
            <tfoot>
                <tr>
                    {this.props.children}
                </tr>
            </tfoot>
        )
    }
}
