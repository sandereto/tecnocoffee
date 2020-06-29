import React, { Component } from 'react'
import './login.css'
import axios from 'axios'
import cookie from 'js-cookie'
import {connect} from 'react-redux'
import { BASE_URL } from '../../baseURL/baseURL'
import { Link } from 'react-router-dom'
// import ReactLoading from 'react-loading'


// const URL = BASE_URL+'/auth/get_perfil'
class Password extends Component {
    constructor(props){
        super(props)
        this.state={email:'',password:'',errors:{},sucesso:"", display:'true', return:'none'}
        
    }
    
   
	
 
    handleForm=(e)=>{
        e.preventDefault();
        const email = this.state.email
        axios.post(BASE_URL+"/password/email", {email: email})
        // axios.post("http://localhost:8000/api/auth/password/email", {email: email})
        .then(res => this.setState({sucesso: res.data.message,display: 'none', return: 'block', errors: ''}))
        .catch(e => this.setState({errors: e.response.data}))
        // .catch(e => console.log(e.response.data))
        // this.props.history.push('/index')
    }

  
    handleInput = (e) =>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
        
    }
    
  render() {
    const error = this.state.errors
    const sucesso = this.state.sucesso
        return (
            <div id="body">
                <div className="form">
                    <form onSubmit={this.handleForm} className="login-form">
                        <div className="card">
                            <div className="card-body login-card-body">
                                {error.error ?( <p className="errors" style={{color: '#DC143C'}}>{error.error}</p>):(<p className="errors" style={{color: 'green'}}>{sucesso}</p>)}
                                <div className="login-logo">
                                    <i className="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1"></i>
                                    <h5 className="mb-0">Recuperação de senha</h5>
                                    <span id="sub" className="d-block text-muted">Entre com suas credenciais</span>
                                </div>
                                <div className="input-group mb-3"  style={{display: `${this.state.display}`}}>
                                    <input onChange={this.handleInput} name="email" type="email" className="form-control" placeholder="Email" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-block" style={{display: `${this.state.display}`}} id="btnLogar">
                                        <i className="icon-circle-right2 ml-2" /> Confirmar
                                    </button>
                                    <Link to="/login" type="button" style={{display: `${this.state.return}`}} className="btn btn-primary btn-block" id="btnLogar">
                                        <i className="icon-circle-right2 ml-2" /> Login
                                    </Link>
                                    {/* <a href="forgot-password.html">Esqueceu sua Senha ?</a>  */}
                                </div>           
                            </div>           
                        </div>
                    </form>  
                </div>    
            </div>
        )
        
    }
    }


const mapDispatchToProps = dispatch => {
    return{
        setLogin:(user) => dispatch({type: "SET_LOGIN", payload: user, name:user.name, email:user.email}),
        // getPerfil:(id) => dispatch(axios.get(`${URL}?id=${id}`) 
        // .then(resp=>dispatch({type:'GET_PERFIL', payload:resp.data})))
           
    }
}
    export default connect(null,mapDispatchToProps)(Password);