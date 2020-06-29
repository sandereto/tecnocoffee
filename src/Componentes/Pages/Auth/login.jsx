import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Wrapper, LogoStyle } from './styles'
import { authentication } from '../../Services/auth'
import Alert from '../../Alerts/alert'

class Login extends Component {

    constructor(props){
        super(props)
        this.state={email:'',password:'',error:"",sucesso:""}
        
    }

    handleForm=(e)=>{
        e.preventDefault();
        const data = {email:this.state.email,password:this.state.password}  
        authentication(data) 
        .then(res =>{
            localStorage.setItem("token", res.data.access_token);
            localStorage.setItem("id_role", res.data.user.id_role); 
            localStorage.setItem("consultant", res.data.user.consultant); 
            this.props.setLogin(res.data.user)
            
            res.data.user.consultant == true ?(
                this.props.history.push('/index')

            ):(this.props.history.push(`/consultor/${res.data.user.id_user}`))      
        })
        .catch(e => this.setState({error: e.response.data.error}))
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
            <React.Fragment>
                <Wrapper>
                    <div className="login-box">            
                        {/* /.login-logo */}
                        <div className="card">
                                <LogoStyle>
                                    <img src="Imagens/logo.webp" alt="Logo Cooxupé" width="130px" className="d-block" />
                                    <img src="http://191.252.200.82:8000/storage/imagens/rehagro.png" width="130px" alt="Logo Rehagro" className="d-block"  />

                                </LogoStyle>
                            <div className="card-body login-card-body">
                            {error.errors ?( <p className="errors" style={{color: '#DC143C'}}>{error.errors}</p>):(sucesso)}
                                <i style={{marginLeft:'125px'}} className="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1"></i>
                                <h5 className="login-box-msg">Faça login na sua conta</h5>
                                <p className="login-box-msg">Entre com suas credenciais</p>
                                {
                                    this.state.error ? (
                                        <div>
                                            <Alert type="danger" hidden="true">
                                                {this.state.error}
                                            </Alert>
                                        </div>
                                    ) :('')                                         
                                }
                                <form onSubmit={this.handleForm}>
                                    <div className="input-group mb-3">
                                        <input onChange={this.handleInput} type="email" name="email" className="form-control" placeholder="Email" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fa fa-envelope" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input onChange={this.handleInput} type="password" name="password" className="form-control" placeholder="Password" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fa fa-lock" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="icheck-primary">
                                                <input type="checkbox" id="remember" />
                                                <label htmlFor="remember">
                                                Remember Me
                                                </label>
                                            </div>
                                        </div>
                                    
                                        <div className="col-4">
                                            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                        </div> 
                                    
                                    </div>
                                </form>
                                <div className="social-auth-links text-center mb-3">
                                    
                                </div>
                            
                            </div>
                        {/* /.login-card-body */}
                        </div>
                    </div>
                </Wrapper>
                {/* /.login-box */}
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return{
        setLogin:(user) => dispatch({type: "SET_LOGIN", payload: user})           
    }
}
export default connect(null,mapDispatchToProps)(Login);