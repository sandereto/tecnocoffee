import React, { Component } from 'react'

export default class select extends Component {
    render() {
        return (
            <React.Fragment>
                <label>{this.props.label}</label>
                <select 
                
                    className="form-control" 
                    onChange={this.props.onChange} 
                    name={this.props.name} 
                    style={{width: '100%'}}
                    value={this.props.value}
                    required={this.props.required}    
                >


                    {this.props.children}
                </select>
            </React.Fragment>
        )
    }
}
