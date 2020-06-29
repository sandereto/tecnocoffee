import React, { Component } from 'react'

export default class radio extends Component {
    render() {
        return (
            <React.Fragment>

                <input 
                    classname="form-check-input" 
                    type="radio" 
                    name="radio1" 
                    defaultChecked={this.props.defaultChecked}
                    style={this.props.style}
                    value={this.props.value} 
                    onChange={this.props.onChange}
                />
                <label 
                    classname="form-check-label"
                >{this.props.label}</label>
                
            </React.Fragment>
            

        )
    }
}
