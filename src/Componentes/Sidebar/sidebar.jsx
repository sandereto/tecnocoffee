import React, { Component } from 'react'
import Menu from '../Menu/menu'
import {connect} from 'react-redux'


class sidebar extends Component {
    render() {
        
        return (
            <React.Fragment>
                {/* Main Sidebar Container */}
                <aside className={`main-sidebar elevation-4 sidebar-light-black elevation-4`}>
                    {/* Brand Logo */}
                    <a href="#/" className='brand-link text-sm navbar-white'>
                        <img src="http://191.252.200.82:8000/storage/imagens/logo.png" alt="" className="brand-image"/>
                        <span className="brand-text font-weight-light">
                            <img src="http://191.252.200.82:8000/storage/imagens/coxo.png" alt="Logo Cooxupé" width="80px" />
                            <img className="ml-2" alt="Logo Rehagro" src="http://191.252.200.82:8000/storage/imagens/rehagro.png" width="80px" />
                        </span>
                          
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="http://191.252.200.82:8000/storage/imagens/hiclipart.com.png" className="img-circle elevation-4" alt="" />
                            </div>
                            <div className="info">
                                <a href="#/" className="d-block">{this.props.name ? (this.props.name) : ('Consultor')}</a>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column text-sm nav-compact nav-child-indent nav-flat nav-legacy" data-widget="treeview" role="menu" data-accordion="false">
                                <Menu /> 
                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>

            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return{
        
        name:state.auth.user.name, 
        
    }
  
};

export default connect(mapStateToProps)(sidebar)
