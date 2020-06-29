import { auth , app} from "./Api";

const authentication = async (data) => {
  	return auth.post("login", data);
};

const information = async () => {
    return app.post("me")
}

const register = async (data) => {
    return auth.post("register",data);
}


export { authentication,information,register };