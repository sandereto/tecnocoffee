import { ibge,viacep } from "./Api";

const getUFS = async () => {
  return ibge.get("estados");
};

const cidadesporUF = async (uf) => {
  return ibge.get(`estados/${uf}/municipios`);
};

const getenderecocep = async (cep) => {
    return viacep.get(`${cep}/json/`);
}

export { getUFS, cidadesporUF, getenderecocep };