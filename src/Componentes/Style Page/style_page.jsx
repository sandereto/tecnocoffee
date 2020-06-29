import React, { Component } from 'react'


export default class style_page extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>{this.props.title}</h1>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">{this.props.subtitle}</h3>
                                    <div className="text-right">
                                        {this.props.button || ''}
                                    </div>
                                </div>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </section>
               
            </div>

        )
    }
}
