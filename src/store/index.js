import { createStore,applyMiddleware } from "redux";
import AllReducers from './reducers/AllReducers'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'



//Função que pega a data atual como default ;

    // var data = new Date();
    // var dia = data.getDate();
    // var mes = data.getMonth();
    // var ano = data.getFullYear();

    // if(mes + 1 < 10){
    //     var compMes = 0
    // }if(dia<10){
    //     var compDia = 0;
    // }if(dia>=10){
    //     compDia = '';
    // }            
    // var str_date =ano + '-' + compMes+(mes+1) + '-' + compDia+(dia) 
    



const initialStates = {
    auth: {
        loggedIn: false,
        user:{},
        
        
    }
   
}
const store = applyMiddleware(thunk,multi,promise)(createStore)(AllReducers,initialStates,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store;