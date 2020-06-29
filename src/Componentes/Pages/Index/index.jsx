import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {  Content, TextContent, ContentWrapper } from './styles'


class index extends Component {
    render() {
        const explode = `${this.props.name}`.split(' ')
        const name = explode[0]
        return (
            <React.Fragment>               
                <div className="content-wrapper">
                    <Content>
                        <ContentWrapper>
                            <section className="content">
                                <div className="row">
                                    <div className="col-12">
                                       
                                               
                                        <h1 style={{fontFamily:'Lato sans serif',padding:'15px',color:'#FFF'}}><b><br></br>Seja Bem Vindo {name !== 'undefined' ? (`${name} `):('Consultor')}!</b></h1>
                                        <TextContent>
                                            O Projeto Tecnocoffee é uma parceria entre a Cooxupé e a 
                                            Faculdade Rehagro, com o objetivo de identificar as principais 
                                            características que interferem na produtividade do café. 
                                            Dessa forma, buscando contribuir com os produtores, 
                                            técnicos e toda a cadeia de produção do café visando 
                                            manejos que proporcionem alcançar altas 
                                            produtividades na cultura do café.
                                        </TextContent>  
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}  
                            </section>                                                 
                        </ContentWrapper>
                    </Content>
                </div> 
               
            </React.Fragment>       
        )
    }
}
const mapStateToProps = state => ({
    name:state.auth.user.name
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(index)
