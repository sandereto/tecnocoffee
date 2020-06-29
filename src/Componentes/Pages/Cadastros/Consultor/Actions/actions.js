import { getUFS, cidadesporUF, getenderecocep } from '../../../../Services/endereco'


/**
* @param event 
*  Função que pega o nome digitado
*/
export const changeNome = event => {
    return [{
        type: 'Change_Nome',
        payload: event.target.value
    }]
}

/**
 * 
 * @param event 
 */
export const changeCidadeAtuacao = event => {
    return[{
        type: 'Change_CidadeAtuacao',
        payload: event.target.value
    }]
}

/**
* @param event 
* Função que pega a data de Nascimento 
*/
export const changeDataNascimento = event => {
    return [{
        type: 'Change_DataNascimento',
        payload: event.target.value
    }]
}

/**
* 
* @param event 
* Função que pega o email digitado
*/
export const changeEmail = event => {
    return [{
        type: 'Change_Email',
        payload: event.target.value
    }]
}

/**
* 
* @param event 
* Função que pega o CPF digitado
*/
export const changeCPF = event => {
    return [{
        type: 'Change_CPF',
        payload: event.target.value.replace('.', '').replace('.', '').replace('-', '')
    }]
}

/**
* 
* @param event 
* Função que pega o telefone digitado
*/
export const changeTelefone = event => {
    return [{
        type: 'Change_Telefone',
        payload: event.target.value.replace('(', '').replace(')', '').replace('-', '').replace(' ', '')
    }]
}

/**
* 
* @param event 
* Função que pega a UF escolhida e chama a função que busca as cidades de acordo com a UF escolhida
*/
export const changeUF = event => {
    return [{
        type: 'Change_Uf',
        payload: event.target.value
    }, getCidades()]
}

/**
* 
* @param event
* Função que pega a Cidade selecionada
*/
export const changeCidade = event => {
    return [{
        type: 'Change_Cidade',
        payload: event.target.value
    }]
}

/**
 * 
 * @param event
 * Função que pega o CEP digitado  e após 2 segundos busca o endereço na API
 */
export const changeCep = event => {
    return [
        dispatch => {
            dispatch({
                type: 'changeCep',
                payload: event.target.value.replace('-', '')

            })      
    },  dispatch => {
            setTimeout(()=>{
                dispatch(
                    getToCep()
                )
            },3000)
        }
    ]
}

/**
 * 
 * @param event
 * Função que pega o logradouro digitado 
 */
export const changeLogradouro = event => {
    return [{
        type: 'Change_Logradouro',
        payload: event.target.value
    }]
}

/**
 * 
 * @param event
 * Função que pega o número digitado 
 */
export const changeNumero = event => {
    return [{
        type: 'Change_Numero',
        payload: event.target.value
    }]
}

/**
 * @param event 
 * Função que pega o bairro digitado
 */
export const changeBairro = event => {
    return [{
        type: 'Change_Bairro',
        payload: event.target.value
    }]
}

/**
 * @param event 
 * Função que pega o complemento digitado
 */
export const changeComplemento = event => {
    return [{
        type: 'Change_Complemento',
        payload: event.target.value
    }]
}

/**
 * Função que consome a API com todas as UFS
 */
export const UFS = () => {
    return dispatch => {
        getUFS()
        .then(resp => dispatch({ type: 'Get_Ufs', payload: resp.data.sort(ordenar)}))
    }
}

/**
 * Função que consome uma api com todas as cidades realcionadas à UF escolhida
 */
export const getCidades = () => {
    return (dispatch, getState) => {
        const uf = getState().consultor.uf
        cidadesporUF(uf)
            .then(resp => dispatch({ type: 'Get_Cidades', payload: resp.data }))
    }
}

/**
 * 
 * @returns UF,BAIRRO,CIDADE,RUA
 * Função que consome uma API passando o CEP
 */
export const getToCep = () => {
    return[clear(),
        (dispatch, getState) => {
            const cep = getState().consultor.cep
            if (cep) {
                getenderecocep(cep)
                    .then(resp => dispatch({ type: 'Get_To_Ceps', payload: resp.data, bairro: resp.data.bairro, uf: resp.data.uf, logradouro: resp.data.logradouro, cidade: resp.data.localidade }))
                    .then(resp => dispatch(getCidades()))
    
            }
        }
    ] 
}



//Função que pega os usuários cadastrados
// export const get = (page) => {
//     return[clear(),(dispatch,getState) => {
//         const pesquisa = getState().user.pesquisa || ''
//         let action = 'get_user'
//         if(pesquisa){
//             action = 'pesquisa'
//         }
//         const qtd_per_page = getState().user.qtd_page
//         const select_perfil = getState().user.select_perfil

//         axios.get(`${URL}?qtd=${qtd_per_page}&id_perfil=${select_perfil}&action=${action}&pesquisa=${pesquisa}`)
//         .then(resp=>dispatch({type:'Get_Users',payload:resp.data}))
//     }]
// }

/**
 * 
 * @param event 
 * Função que define a quantidade de itens à ser exibido por página
 */
export const qtdPerPage = event => {
    return [{
        type: 'qtdPerPage',
        payload: event.target.value
    },
    // get(1)
    ]
}

/**
 * 
 * @param event 
 * Função que pega o valor digitado no filtro
 */
export const getChangeFiltro = event => {
    return [{
        type: 'changeFiltro',
        payload: event.target.value
    }]
}

/**
 * 
 * @param event 
 * Função que limpa o filtro
 */
export const clearFiltro = event => {
    return [{
        type: 'ClearFiltro',
        payload: ''
    },
    //  get(1)
    ]
}

/**
 * Função que limpa a árvore do redux
 */
export const clear = () => {
    return [{
        type: 'Clear',
        uf: '',
        cidade: '',
        logradouro: '',
        bairro: '',
        
        

    }]


}

export const clearInputs = ()  => {
    return [{
        type:'clearInputs',
        nome:'',
        telefone:'',
        cpf:'',
        data_nascimento:'',
        cidade_atuacao:'',
        uf: '',
        cidade: '',
        logradouro: '',
        bairro: '',
        cep:'',
        complemento:'',
        numero:''

    }]
}

/**
 * 
 * @param {object} a 
 * @param {object} b 
 * Função para ordenar o objeto com as UFS
 */
export const ordenar = (a, b) =>{
    return a.sigla < b.sigla ? -1 : a.sigla > b.sigla ? 1 : 0;
}

export const editView = (data) => {
    return dispatch => {
        if(data){
            dispatch({

                type:'editView',
                nome: data.name || '',
                email: data.email || '',
                cpf: data.cpf || '',
                telefone: data.telefone || '',
                cep: data.zipcode || '',
                uf: data.state || '',
                cidade: data.city || '',
                logradouro: data.street || '',
                numero: data.number || '',
                bairro: data.neighborhood || '',
                data_nascimento: data.birth_date || '',
                cidade_atuacao:data.acting_city || '',
                complemento:data.complement || ''
            })

        }
    }
        
        
        

    
}
