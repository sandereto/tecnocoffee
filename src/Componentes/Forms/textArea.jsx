import React, { Component } from 'react'

export default class textArea extends Component {
    render() {
        return (
            <React.Fragment>
                <label>{this.props.label}</label>
                <textarea 
                    onChange={this.props.onChange} 
                    className="textarea" 
                    placeholder={this.props.placeholder} 
                    style={{width: '100%', height: 200, fontSize: 14, lineHeight: 18, border: '1px solid #dddddd', padding: 10}} 
                    defaultValue={""} 
                />      
            </React.Fragment>

        )
    }
}
