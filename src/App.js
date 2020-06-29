import './Dependencies/dependencies'
import './Dependencies/jquery-loader'
import React from 'react';
import AuthRouter from './Componentes/AuthRouter'
import Login from './Componentes/Pages/Auth/login'
import Index from './Componentes/Pages/Index/index'
import Header from './Componentes/Header/header'
import Sidebar from './Componentes/Sidebar/sidebar'
import Consultor from './Componentes/Pages/Cadastros/Consultor/consultor'
import Register from './Componentes/Pages/Auth/register'
import Footer from './Componentes/Footer/footer'
import AlterPassword from './Componentes/Pages/Auth/alter_password'
import {
  BrowserRouter ,Route, Switch 
} from "react-router-dom";


const Routes = () =>(
    <React.Fragment>      
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>      
                <Route path="/login" component={Login} />                 
                <Route path="/alter-password" component={AlterPassword} />
                    <div className="wrapper">
                        <Header />
                        <Sidebar />
                       
                            <AuthRouter path="/index" component={Index} />
                            <AuthRouter path="/consultor/:id" component={Consultor} />
                            <AuthRouter path="/register" component={Register} />
                            <AuthRouter path="/consultor_edit/:id" component={Consultor} />
                        
                        <Footer />
                    </div>                              
            </Switch>      
        </BrowserRouter>  
    </React.Fragment>
    
    
);
export default Routes;