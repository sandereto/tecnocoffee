import React, { Component } from 'react'


export default class nav_item_dropdown extends Component {
    constructor(props){
        super(props)
        this.state={open:'',close:'',display:'none'}
        this.open=this.open.bind(this)
        this.close=this.close.bind(this)
        this.verificaOpen=this.verificaOpen.bind(this)
        
    }

    //Função que abre o dropdown
    open(){
        this.setState({...this.state,open:'menu-open',display:'block'})     
    }

    //Função que esconde o dropwdown
    close(){
        this.setState({...this.state, open:'',display:'none'})
        
    }

    //Função que verifica se o dropdown está open
    verificaOpen(){
        const open = this.state.open
        if(open === 'menu-open'){
            this.close()
        }else{
            this.open()
        }
    }

    render() {
        return (
            <React.Fragment>
                 <li className={`nav-item has-treeview ${this.state.open}`}>
                    <a href="#/" className="nav-link" onClick={()=>this.verificaOpen()}>
                        <i className={`nav-icon ${this.props.icon}`} />
                        <p>
                            {this.props.dropItem}
                        <i className="right fa fa-angle-left" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview" style={{display:`${this.state.display}`}}>
                       {this.props.children}
                    </ul>
                </li>
            </React.Fragment>
        )
    }
}
