import { combineReducers } from "redux";
import AuthReducer from './AuthReducer';
import ConsultorReducer from './ConsultorReducer'




const AllReducers = combineReducers({auth: AuthReducer, consultor:ConsultorReducer


})

export default AllReducers;