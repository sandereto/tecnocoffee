import React, { Component } from 'react'
import './login.css'
import axios from 'axios'
import cookie from 'js-cookie'
import {connect} from 'react-redux'
import AllReducers from '../../store/reducers/AllReducers'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../baseURL/baseURL'


// const URL = BASE_URL+'/auth/get_perfil'
class Reset_Form extends Component {
    constructor(props){
        super(props)
        this.state={email:'',password:'',error:'',sucesso:"", display:'true', return:'none'}
        
    }
    
   
	
 
    handleForm=(e)=>{
        e.preventDefault();

        
        
        const email = this.props.location.search.split('&email')[1];


        const token = this.props.location.search.split('&email')[0].replace('?token','')


        const data = {password:this.state.password,password_confirmation:this.state.password_confirm, email: email, token: token}  
        
        
        axios.post(BASE_URL+"/auth/password/reset",data)
        // axios.post("http://localhost:8000/api/auth/password/reset", data)
        .then(res => this.setState({sucesso: 'Senha alterada com sucesso', display: 'none', return: 'block', error: ''}))
        // .catch(e => this.setState({errors: e.response.data}))
        .catch(e => this.setState({error: 'Confirme sua senha ! A senha deve conter no mínimo 8 caracteres'}))
        // this.props.history.push('/index')
    }

  
    handleInput = (e) =>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
        
    }
    
  render() {
    const error = this.state.error
    const sucesso = this.state.sucesso
    return (
        <div id="body">
            <div className="form">
                <form onSubmit={this.handleForm} className="login-form">
                    <div className="card">
                        <div className="card-body login-card-body">
                            {error ?( <p className="errors" style={{color: '#DC143C'}}>{error}</p>):(<p className="errors" style={{color: 'green'}}>{sucesso}</p>)}
                            <div className="login-logo">
                                <i className="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1"></i>
                                <h5 className="mb-0">Recuperação de senha</h5>
                                <span id="sub" className="d-block text-muted">Entre com suas credenciais</span>
                            </div>
                            <div className="input-group mb-3" style={{display: `${this.state.display}`}}>
                                <input onChange={this.handleInput} name="password" type="password" className="form-control" placeholder="Senha" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            {/* {this.props.msgValidatePassword ? (<p style={this.props.validPassword == true ?({color:'#008000'}):({color:'#DC143C'})}>{this.props.msgValidatePassword}</p>):(<span></span>)} */}
                            <div className="input-group mb-3" style={{display: `${this.state.display}`}}>
                                <input onChange={this.handleInput} name="password_confirm" type="password" className="form-control" placeholder="Confirmação de Senha" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            {/* {this.props.msgValidateConfirm_password ? (<p style={this.props.validConfirm_password == true ?({color:'#008000'}):({color:'#DC143C'})}>{this.props.msgValidateConfirm_password}</p>):(<span></span>)} */}
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

const mapStateToProps = state => ({
    msgValidatePassword:state.user.msgValidatePassword,
    msgValidateConfirm_password:state.user.msgValidateConfirm_password,
});

const mapDispatchToProps = dispatch => {
    return{
        setLogin:(user) => dispatch({type: "SET_LOGIN", payload: user, name:user.name, email:user.email}),
        // getPerfil:(id) => dispatch(axios.get(`${URL}?id=${id}`) 
        // .then(resp=>dispatch({type:'GET_PERFIL', payload:resp.data})))
           
    }
}
    export default connect(mapStateToProps,mapDispatchToProps)(Reset_Form);