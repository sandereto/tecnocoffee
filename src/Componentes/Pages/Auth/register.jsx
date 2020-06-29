import React, { Component } from 'react'
import Style from '../../Style Page/style_page'
import Form from '../../Forms/form'
import Input from '../../Forms/input'
import Select from '../../Forms/select'
import { Link } from 'react-router-dom'
import { register } from '../../Services/auth'
import Alert from '../../Alerts/alert'




export default class consultor extends Component {
    state = {email:'',password:'',confirm_password:'',perfil:'',error:[],success:'',alert:'',errorConfirmPassword:''}

    componentDidMount () {
        this.setState({email:'',password:'',confirm_password:'',perfil:'',error:[],success:'',alert:''})
    }

    changeEmail = event => {
        const email = event.target.value
        this.setState({email:email})
    }

    changePassword = event => {
        const password = event.target.value
        this.setState({password:password})
    }
    changeConfirmPassword = event => {
        const confirm_password = event.target.value
        this.setState({confirm_password:confirm_password})
    }
    changePerfil = event => {
        const perfil = event.target.value
        this.setState({perfil:perfil})
    }
    handleForm=(e)=>{
        e.preventDefault();
        const data = {
            email:this.state.email,
            password:this.state.password,
            id_role:this.state.perfil,
            confirm_password:this.state.confirm_password
        }

        if(this.state.password !== this.state.confirm_password)
        {
            this.setState({errorConfirmPassword: 'Erro ao cadastrar o usuário. As senhas não conferem!'})
            // return;
        }

        register(data)
            .then(resp=> {
                this.setState({alert:'',errorConfirmPassword:'',error:[],success:resp.data.success,email:'',password:'',perfil:'',confirm_password:''})
                
            })
            .catch(e => (
                this.setState({success:'',error: e.response.data.errors,alert:e.response.data.message ? ("Os dados fornecidos são inválidos"):('')}
                )
            ))   
            
            
    }
  
    render() {
        return (
            <Style title="Cadastro de Usuário" subtitle="Cadastrar Usuário">
                {this.state.alert ? (
                    <Alert type="danger">
                        {this.state.alert}
                    </Alert>
                ):('')}
                {this.state.success ? (
                    <Alert type="success">
                        {this.state.success}
                    </Alert>
                ):('')}
                
                <Form onSubmit={this.handleForm}>
                    <div className="row">              
                        <div className="col-md-6">
                            <Input label="Email" value={this.state.email} onChange={this.changeEmail} icon="fas fa-envelope" name="email" type="text" placeholder="Digite o email do usuário" required="true"/>
                            {this.state.error ? (<p style={{color:'red'}}>{this.state.error.email}</p>):('')}
                        </div>
                        <div className="col-md-6">
                            <Select onChange={this.changePerfil} value={this.state.perfil} label="Perfil" required="true">
                                <option value="">Selecione o Perfil</option>
                                <option value={1}>Administrador</option>
                                <option value={2}>Consultor</option>          
                            </Select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Input label="Senha" value={this.state.password} onChange={this.changePassword} icon="fas fa-lock" name="password" type="password" placeholder="Digite a senha do usuário" required="true"/>
                            {this.state.errorConfirmPassword ? (<p style={{color:'red'}}>{this.state.errorConfirmPassword}</p>):('')}
                        </div>
                        <div className="col-md-6">
                            <Input label="Confirme Senha" value={this.state.confirm_password} onChange={this.changeConfirmPassword} icon="fas fa-lock" name="confirm_password" type="password" placeholder="Confirme a senha do usuário" required="true"/>
                            {this.state.errorConfirmPassword ? (<p style={{color:'red'}}>{this.state.errorConfirmPassword}</p>):('')}
                        </div>

                    </div>
                    <br></br>
                    <div className="text-right">
                        <button type="submit" className="btn btn-primary">Salvar</button>                           
                        <Link to="/index" type="button" className="btn btn-secondary" style={{marginLeft:'10px'}}>Cancelar</Link>
                    </div>        
                </Form>
                
            </Style>
        )
    }
}

