import {Route, Redirect} from 'react-router-dom'
import React from 'react'
import {connect} from 'react-redux'
import { information } from './Services/auth'





const AuthRouter = ({component:Component, ...rest }) =>{
    
    return (  
        <Route
            {...rest}
            
            render={props => {
                let token = localStorage.getItem('token')
                let informacao = '';
                information().then(resp => {
                    informacao = resp.data.password_confirmation
                        
                })
                  
                if(token){
                    
                    return <Component {...props} />
                }
                    return <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />           
            }}
        />
    );
}
const mapStateToProps = state => {
    return{
        loggedIn:state.auth.loggedIn    
    }
}
export default connect(mapStateToProps)(AuthRouter);