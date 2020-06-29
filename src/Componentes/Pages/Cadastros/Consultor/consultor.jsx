import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NumberFormat from 'react-number-format'
import Style from '../../../Style Page/style_page'
import Form from '../../../Forms/form'
import Input from '../../../Forms/input'
import Select from '../../../Forms/select'
import {Link} from 'react-router-dom'
import { post_consultant,get_edit,put_consultant } from '../../../Services/consultant'
import Alert from '../../../Alerts/alert'
import {clearInputs,editView,changeDataNascimento,changeUF,UFS,getCidades,changeCep,getToCep,changeCPF,changeTelefone,changeNome,changeEmail,changeBairro,changeNumero,changeLogradouro,changeCidade,clear,changeCidadeAtuacao,changeComplemento} from './Actions/actions'

class consultor extends Component {
    state = {error:[],alert:'',success:''}

    componentDidMount(){
        const id = this.props.match.params.id
        this.props.clearInputs()
        get_edit(id)
        .then(resp => (
            this.props.editView(
                resp.data[0]
            )
        ))
        .then(resp=>(
            this.props.UFS()

        ))
        .then(resp =>(
            this.props.getCidades()
        ))
        // .then(resp =>(

        //     this.props.clear()
        // ))
          
    }

    /**
     * Função que mapeia o objeto com as UFS
     */
    ufs(){
        const ufs = this.props.ufs || [];
        return ufs.map(desc=>(
            <option key={desc.id} value={desc.sigla}>{desc.sigla}</option>
        ))

    }

    /**
     * Função que mapeia o objeto com as cidades
     * 
     */
    cidades(){
        const cidades = this.props.cidades || [];
        return cidades.map(desc=>(
            <option key={desc.id} value={desc.nome}>{desc.nome}</option>
        ))

    }

    handleForm=(e)=>{
        e.preventDefault();
        let type_number = '';
        if(this.props.telefone[2] === '2' || this.props.telefone[2] === '3' || this.props.telefone[2] === '4'){
            type_number = 1;
        }else if(this.props.telefone[2] === '7' || this.props.telefone[2] === '8' || this.props.telefone[2] === '9'){
            type_number = 2
        }
        const data = {
            nome:this.props.name,
            email:this.props.email,
            cpf:this.props.cpf,
            cep:this.props.cep,
            estado:this.props.uf,
            cidade:this.props.cidade,
            rua:this.props.logradouro,
            numero:this.props.numero,
            bairro:this.props.bairro,
            telefone:this.props.telefone,
            data_nascimento:this.props.data_nascimento,
            id_user:this.props.id_user,
            complemento: this.props.complemento,
            cidade_atuacao: this.props.cidade_atuacao,
            id_type_phone:type_number
        }
        if(this.props.consultant === false){
           
            post_consultant(data)
            .then(resp=> {
                this.props.history.push('/index');
            })     
            .then(resp => {window.location.reload()})
            .catch(e => (
                this.setState({error:e.response.data.errors,alert:e.response.data.message ? ("Os dados fornecidos são inválidos"):("")})
            ))
            return;

        }else if(this.props.consultant === true){

            put_consultant(data,this.props.consultant_id) 
            .then(resp => (this.setState({success:"Dados editados com sucesso", error:[],alert:''})))
            .then(resp => (setTimeout(()=>{
                window.location.reload()
            },1500)))
            .catch(e => (
                this.setState({error:e.response.data.errors,alert:e.response.data.message ? ("Os dados fornecidos são inválidos"):("")})
            ))
        }
            
        
    }
  
    render() {
        return (
            <Style title="Cadastro de Consultor" subtitle="Cadastrar Consultor">
                {this.state.alert ? (
                    <Alert type="danger">
                        {this.state.alert}
                    </Alert>
                ):('') }
                {this.state.success ? (
                    <Alert type="success">
                        {this.state.success}
                    </Alert>
                ):('') }
               
                <Form onSubmit={this.handleForm}>
                    <div className="row">              
                        <div className="col-md-4">
                            <Input label="Nome *" value={this.props.name} onChange={this.props.changeNome} icon="fa-user" name="nome" type="text" placeholder="Digite o nome do consultor" required={true}/>
                            {this.state.error ? (<p style={{color:'red'}}>{this.state.error.nome}</p>):('')}
                        </div>
                        <div className="col-md-4">
                            <NumberFormat allowEmptyFormatting={false} icon="fa-address-card"  mask='' placeholder="Digite o CPF do consultor" label="CPF *"	customInput={Input} value={this.props.cpf} onChange={this.props.changeCPF}  format={"###.###.###-###"} />
                            {this.state.error ? (<p style={{color:'red'}}>{this.state.error.cpf}</p>):('')}              
                        </div>
                        <div className="col-md-4">
                            <Input label="Data Nascimento *" value={this.props.data_nascimento} onChange={this.props.changeDataNascimento} icon="fa-user" name="data_nascimento" type="date" placeholder="Digite a data de nascimento"/>
                            {this.state.error ? (<p style={{color:'red'}}>{this.state.error.data_nascimento}</p>):('')}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <Input label="Cidade de Atuação" value={this.props.cidade_atuacao} onChange={this.props.changeCidadeAtuacao} icon="fa-street-view" name="cidade_atuacao" type="text" placeholder="Digite o nome da cidade de atuação"/>
                            {this.state.error? (<p style={{color:'red'}}>{this.state.error.cidade_atuacao}</p>):('')}
                        </div>
                        <div className="col-md-4">
                            <Input label="Email" onChange={this.props.changeEmail} value={this.props.email} icon="fa-envelope" name="email" type="text" placeholder="Digite o email do consultor" disabled="disabled"/>
                        </div>
                        <div className="col-md-4">
                            <NumberFormat allowEmptyFormatting={false} label="Telefone *"  mask='' customInput={Input} onChange={this.props.changeTelefone}  format={`${this.props.telefone}`[2] === '3' || `${this.props.telefone}`[2] === '4' || `${this.props.telefone}`[2] === '2' ?("(##) ####-####"):("(##) #####-####")} icon="fa-phone" value={this.props.telefone} name="telefone" type="text" placeholder="Digite o telefone do consultor" />
                            {this.state.error ? (<p style={{color:'red'}}>{this.state.error.telefone}</p>):('')}                                
                        </div>
                    </div>
                    <hr></hr>
                    <br></br>
                    <h3>Endereço</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <NumberFormat allowEmptyFormatting={false} icon="fa-street-view"  mask='' placeholder="Digite o CEP *" label="CEP" customInput={Input} value={this.props.cep} onChange={this.props.changeCep}  format={"#####-###"} />
                            {this.state.error ? (<p style={{color:'red'}}>{this.state.error.cep}</p>):('')}                              
                        </div>
                        <div className="col-md-6">
                            <Input label="Logradouro" value={this.props.logradouro} onChange={this.props.changeLogradouro} icon="fa-home" name="logradouro" type="text" placeholder="Rua,avenida,etc..."/>
                            {this.state.error ? (<p style={{color:'red'}}>{this.state.error.rua}</p>):('')}
                        </div>
                        <div className="col-md-2">
                            <Input label="Numero" value={this.props.numero} onChange={this.props.changeNumero} icon="fa-home" name="numero" type="number" placeholder="Número"/>
                            {this.state.error ? (<p style={{color:'red'}}>{this.state.error.numero}</p>):('')}
                        </div>
                        {/* <div className="col-md-1">
                            <div className="input-group mb-3" style={{paddingTop:'30px'}}>
                                <button type="button" onClick={()=>this.props.getToCep()} className="btn btn-secondary">Buscar</button>
                            </div>
                        </div> */}
                       
                    </div>
                    <div className="row">
                    <div className="col-md-2">
                            <Select onChange={this.props.changeUF} value={this.props.uf} label="UF">
                                <option value="">Selecione a UF</option>
                                {this.ufs()}
                            </Select>
                        </div>
                        <div className="col-md-3">
                            <Select onChange={this.props.changeCidade} value={this.props.cidade} label="Cidade">
                                <option>Selecione a Cidade</option>
                                {this.cidades()}
                            </Select>
                        </div>                           
                       
                        <div className="col-md-4">
                            <Input label="Bairro" value={this.props.bairro} onChange={this.props.changeBairro} icon="fa-home" name="bairro" type="text" placeholder="Digite o bairro"/>
                            {this.state.error ? (<p style={{color:'red'}}>{this.state.error.bairro}</p>):('')}
                        </div>
                        <div className="col-md-3">
                            <Input label="Complemento"value={this.props.complemento} onChange={this.props.changeComplemento} icon="fa-home" name="complemento" type="text" placeholder="Complemento"/>
                            {this.state.error ? (<p style={{color:'red'}}>{this.state.error.complemento}</p>):('')}
                        </div>
                        
                    </div>
                    <br></br>
                    <div className="text-right">
                        <button type="submit" className="btn btn-primary">Salvar</button>                           
                        <Link to="/consultor" type="button" className="btn btn-secondary" style={{marginLeft:'10px'}}>Cancelar</Link>
                    </div>        
                </Form>
            </Style>
        )
    }
}
const mapStateToProps = state => ({
    ufs:state.consultor.ufs,
    cidades:state.consultor.cidades,
    countrys:state.consultor.countrys,
    telefone:state.consultor.telefone,
    name:state.consultor.nome,
    email:state.auth.user.email,
    cep:state.consultor.cep,
    uf:state.consultor.uf,
    cidade:state.consultor.cidade,
    logradouro:state.consultor.logradouro,
    numero:state.consultor.numero,
    bairro:state.consultor.bairro,
    data_nascimento:state.consultor.data_nascimento,
    cidade_atuacao:state.consultor.cidade_atuacao,
    id_user:state.auth.user.id_user,
    complemento:state.consultor.complemento,
    cpf:state.consultor.cpf,
    consultant_id:state.auth.user.consultant_id,
    consultant:state.auth.user.consultant
    
  

  
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({clearInputs,editView,changeDataNascimento,changeUF,UFS,getCidades,changeCep,getToCep,changeCPF,changeTelefone,changeNome,changeEmail,changeBairro,changeNumero,changeLogradouro,changeCidade,clear,changeCidadeAtuacao,changeComplemento}, dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(consultor)
