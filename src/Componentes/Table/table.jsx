import React, { Component } from 'react'

export default class table extends Component {
    render() {
        return (
            <section className="content">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">{this.props.title}</h3>
                            <div className="text-right">
                            {this.props.button || ''}
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                        
                        <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4 responsive">                         
                            <div className="row">
                                {this.props.cabecalho}
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <table id="example2" className="table table-bordered table-striped dataTable dtr-inline">
                                        {this.props.children}  
                                    </table>
                                </div>

                            </div>                  
                            <div className="row">
                                {this.props.view}
                                {this.props.pagination}
                            </div>
                        </div>
                        
                        </div>
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                </div>
                {/* /.col */}
            </div>
            {/* /.row */}  
        </section>
            

        )
    }
}

