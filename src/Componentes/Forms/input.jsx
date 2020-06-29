import React, { Component } from 'react'

export default class input extends Component {
    render() {
        return (
            <React.Fragment>
                <label>{this.props.label}</label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text ">
                            <i 
                                className={`fa ${this.props.icon}`} 
                            />
                        </span>
                    </div>
                    <input 
                        type={this.props.type} 
                        name={this.props.name} 
                        className="form-control" 
                        placeholder={this.props.placeholder} 
                        onChange={this.props.onChange}
                        value={this.props.value}
                        required={this.props.required || false}
                        disabled={this.props.disabled}
                    />
                </div>
            </React.Fragment>
            
        )
    }
}
