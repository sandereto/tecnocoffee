import React from 'react'
import {connect} from 'react-redux'

function header(props) {
    const handleRemove = e => {
        e.preventDefault();
        localStorage.removeItem('token')
        localStorage.removeItem('id_role')
        localStorage.removeItem('consultant')
        props.logout()
    }
    
    return (
        <React.Fragment>
            <nav className={`main-header navbar navbar-expand text-sm navbar-dark navbar-navy`}>
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#/" role="button"><i className="fa fa-bars" /></a>
                    </li>
                </ul>
            
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    {/* Messages Dropdown Menu */}
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#/">
                            <img src="http://191.252.200.82:8000/storage/imagens/hiclipart.com.png" alt="Imagem" className="img-user img-circle elevation-3 mr-2" style={{height:'30px',marginTop:'-8px'}}/>
                            <span> {props.name ?(props.name):("Consultor")}</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            {/* <a href="#/" className="dropdown-item">
                                <i className="fa fa-gear" />
                                <span>  Meus Dados</span>
                            </a> */}
                        <div className="dropdown-divider" />
                            <a href="#/" className="dropdown-item" onClick={handleRemove}>
                                <i className="fa fa-power-off" />
                                <span>  Sair</span>
                            </a>
                        </div>
                    </li>
                </ul>

            </nav>

        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return{
        loggedIn: state.auth.loggedIn,
        name:state.auth.user.name,      
    }
  };
const mapDispacthToProps = dispatch => {
    return{
        logout:() => dispatch({type:'SET_LOGOUT'})    
    }
  };
  export default connect(mapStateToProps,mapDispacthToProps)(header)