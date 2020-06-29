import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class nav_item extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <Link to={this.props.to} className="nav-link">
                        <i className={`nav-icon ${this.props.icon}`} />
                        <p>
                            {this.props.iconCircle?(
                                <i className={`${this.props.iconCircle}` || ''}></i>
                            ):('')}
                            {this.props.item}
                            
                        </p>
                    </Link>
                </li>
            </React.Fragment>
        )
    }
}
