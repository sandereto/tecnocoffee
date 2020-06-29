import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/index'
import {Provider} from 'react-redux'
import jwt from 'jsonwebtoken'
import {URL} from './baseURL/baseURL'
import { information } from './Componentes/Services/auth'

const jwt_secret = 'SHNrXx9qQ81qNbzGPPw0pGgRagJ0aInG3l7X4U4ecF9KGz1P002wq0RpkTIhy8gc'

let token = localStorage.getItem('token')

if(token){
    jwt.verify(token, jwt_secret, function(err, decoded){
        if(err){
            localStorage.removeItem('token')
            token = null;
            
        }else{
            if(decoded.iss !== URL+'/login'){
                localStorage.removeItem('token')
                token = null;
            }
        }
        
    });
}

const render = () => {
    ReactDOM.render(
        <React.Fragment>
            <Provider store={store}>
                <App />
            </Provider>
        </React.Fragment>
        
    , document.getElementById('root'));
}
if(token){
    information()
    .then(res => {store.dispatch({type: "SET_LOGIN", payload:res.data})})
    render();
}else{
    render();
}
