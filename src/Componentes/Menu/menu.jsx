import React, { Component } from 'react'
import NavItem from './nav-item'
import NavItemDropdown from './nav-item-dropdown'
import { connect } from 'react-redux'

class menu extends Component {
    render() {
        return (
            <React.Fragment>
                <NavItem to="/index" item="Home" icon="fa fa-home" />
                <NavItemDropdown dropItem="Cadastros" icon="fa fa-copy">
                    {parseInt(localStorage.getItem('id_role')) === 1 ?(
                        <NavItem item="Usuário" iconCircle="fa fa-circle nav-icon" to="/register"/>
                    ):('')}
                    <NavItem item="Perfil" iconCircle="fa fa-circle nav-icon" to={`/consultor/${this.props.id_user}`}/>
                    <NavItem item="Produtor" iconCircle="fa fa-circle nav-icon" to="#/" disabled="disabled"/>
                    <NavItem item="Talhão" iconCircle="fa fa-circle nav-icon" to="#/" disabled="disabled"/>
                </NavItemDropdown>
                <NavItem to="#/" item="Análise de Solo" icon="fa fa-flask" />
                <NavItem to="#/" item="Precipitação" icon="fa fa-tree" />
                <NavItem to="#/" item="Compactação" icon="fa fa-feather" />
                <NavItemDropdown dropItem="Insumos" icon="fa fa-copy">
                    <NavItem item="Adubação" iconCircle="fa fa-circle nav-icon" to="#/"/>
                    <NavItem item="Corretivos" iconCircle="fa fa-circle nav-icon" to="#/" disabled="disabled"/>
                    <NavItem item="Adubação Orgânica" iconCircle="fa fa-circle nav-icon" to="#/" disabled="disabled"/>
                </NavItemDropdown>
                <NavItemDropdown dropItem="Proteção da Lavoura" icon="fa fa-copy">
                    <NavItem item="Controle do Mato" iconCircle="fa fa-circle nav-icon" to="#/"/>
                    <NavItem item="Pulverizações" iconCircle="fa fa-circle nav-icon" to="#/" disabled="disabled"/>
                    <NavItem item="Controle de Pragas e Doenças" iconCircle="fa fa-circle nav-icon" to="#/" disabled="disabled"/>
                </NavItemDropdown>
            </React.Fragment>

        )
    }
}
const mapStateToProps = state => ({
    id_perfil:state.auth.user.id_perfil,
    id_user:state.auth.user.id_user  
});
export default connect(mapStateToProps)(menu)
