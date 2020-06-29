import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class cabecalho extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-sm-12 col-md-4">
                    <div className="dataTables_length" id="example1_length">
                        <label> Visualizar  
                            <select style={{marginLeft: '5px'}} value={this.props.qtd_page} onChange={this.props.qtdPerPage} name="example1_length" aria-controls="example1" className="custom-select custom-select-sm form-control form-control-sm">
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                            </select> Registros
                        </label>
                    </div>
                </div>
                <div className="col-md-4" style={{display:`${this.props.radio ?('inline-block'):('none')}`}}>
                    {this.props.radio}

                </div>
                <div className="col-sm-12 col-md-4">
                    <div id="example1_filter" className="dataTables_filter">
                        <label>Filtrar:
                            <input value={this.props.pesquisa} type="" onChange={this.props.getChangeFiltro} className="form-control form-control-sm" aria-controls="example1"/>
                            <Link  to={this.props.to} onClick={this.props.clear} style={{marginLeft: '-20px',position:'relative'}}><i className="fa fa-close"></i></Link>
                        </label>
                        <Link to={this.props.to} onClick={this.props.action} style={{marginLeft:'25px'}} className="btn btn-outline-secondary btn-sm">Pesquisar</Link>
                    </div>
                </div>
            </React.Fragment>  
        )
    }
}



