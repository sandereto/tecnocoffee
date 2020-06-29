import axios from "axios";
import {URL} from '../../baseURL/baseURL'

const baseURL = URL;
// const baseURL = "http://191.252.200.82:8000/api/";
// const baseURL = "http://191.252.200.89:8000/api/";
const baseIBGE = "https://servicodados.ibge.gov.br/api/v1/localidades/";
const baseVIACEP = "https://viacep.com.br/ws/";

const app = axios.create({
    baseURL,
});

app.interceptors.request.use(
    (config) => {
        return {
        ...config,
        headers: {
            ...config.headers,
            common: {
            ...config.headers.common,
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        },
        };
    },
    (error) => Promise.reject(error)
);

const auth = axios.create({
    baseURL,
});

const ibge = axios.create({
    baseURL:baseIBGE,
});

const viacep = axios.create({
    baseURL:baseVIACEP,
});

export { auth, app, ibge, viacep };