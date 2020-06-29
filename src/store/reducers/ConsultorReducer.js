const ConsultorReducer = (state = {}, actions)=>{
    switch(actions.type){
        case 'Change_Uf':
            return{...state, uf:actions.payload,estado:actions.estado}

        case 'Change_Cidade':
            return{...state, cidade:actions.payload}

        case 'Change_Nome':
            return{...state, nome:actions.payload}

        case 'Change_CidadeAtuacao':
            return{...state, cidade_atuacao:actions.payload}

        case 'Change_Email':
            return{...state, email:actions.payload}

        case 'Change_CPF':
            return{...state, cpf:actions.payload}

        case 'Change_Telefone':
            return{...state, telefone:actions.payload}

        case 'Change_Logradouro':
            return{...state, logradouro:actions.payload}
        
        case 'Change_Complemento':
            return{...state, complemento:actions.payload}

        case 'Change_Numero':
            return{...state, numero:parseInt(actions.payload)}

        case 'Change_Bairro':
            return{...state, bairro:actions.payload}
           
        case 'Get_Ufs':
            return{...state, ufs:actions.payload}

        case 'Get_Cidades':
            return{...state, cidades:actions.payload}

        case 'changeCep':
            return{...state, cep:actions.payload}

        case 'Change_DataNascimento':
            return{...state,data_nascimento:actions.payload}

        case 'Get_To_Ceps':
            return{...state, countrys:actions.payload,bairro:actions.bairro,uf:actions.uf,logradouro:actions.logradouro,cidade:actions.cidade}

        case 'Get_Users':
            return{...state,users:actions.payload}

        case 'qtdPerPage':
            return{...state,qtd_page:actions.payload}
        
        case 'changeFiltro':
            return{...state,pesquisa:actions.payload}

        case 'ClearFiltro':
            return{...state, pesquisa:actions.payload}

        case 'Clear':
            return{...state,
                uf:actions.uf,
                cidade:actions.cidade,
                logradouro:actions.logradouro,
                bairro:actions.bairro,
               
            }
            
        case 'editView':
            return{...state,
            
                nome:actions.nome,
                email:actions.email,
                cpf:actions.cpf,
                cidade_atuacao:actions.cidade_atuacao,
                telefone:actions.telefone,    
                cep:actions.cep,
                uf:actions.uf,
                cidade:actions.cidade,
                logradouro:actions.logradouro,
                numero:actions.numero,
                bairro:actions.bairro,
                data_nascimento:actions.data_nascimento,
                complemento:actions.complemento
            
            }
        
        case 'clearInputs':
            return{...state,
                nome:actions.nome,
                email:actions.email,
                cpf:actions.cpf,
                cidade_atuacao:actions.cidade_atuacao,
                telefone:actions.telefone,    
                cep:actions.cep,
                uf:actions.uf,
                cidade:actions.cidade,
                logradouro:actions.logradouro,
                numero:actions.numero,
                bairro:actions.bairro,
                data_nascimento:actions.data_nascimento,
                complemento:actions.complemento
                
            }
        default:
            return state;
    }
}
export default ConsultorReducer;