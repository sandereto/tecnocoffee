const UserReducer = (state = {}, actions)=>{
    switch(actions.type){
        case 'Change_Uf':
            return{...state, uf:actions.payload}

        case 'Change_Cidade':
            return{...state, cidade:actions.payload}

        case 'Change_Nome':
            return{...state, nome:actions.payload}

        case 'Change_Email':
            return{...state, email:actions.payload}

        case 'Change_CPF':
            return{...state, cpf:actions.payload}

        case 'Change_RG':
            return{...state, rg:actions.payload}

        case 'Change_Telefone':
            return{...state, telefone:actions.payload}

        case 'Change_Logradouro':
            return{...state, logradouro:actions.payload}

        case 'Change_Numero':
            return{...state, numero:actions.payload}

        case 'Change_Bairro':
            return{...state, bairro:actions.payload}

        case 'Change_NomeMae':
            return{...state, nome_mae:actions.payload}

        case 'Change_NomePai':
            return{...state, nome_pai:actions.payload}

        case 'Change_Sexo':
            return{...state, sexo:actions.payload}

        case 'Change_Inscricao':
            return{...state, inscricao:actions.payload}

        case 'Change_Naturalidade':
            return{...state, naturalidade:actions.payload}
            
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

        case 'Get_Perfil':
            return{...state,perfis:actions.payload}

        case 'Change_Perfil':
            return{...state,perfil:actions.payload}

        case 'Change_Cnh':
            return{...state,cnh:actions.payload}

        case 'Change_Funcional':
            return{...state,funcional:actions.payload}

        case 'Change_DateFuncional':
            return{...state,data_funcional:actions.payload}

        case 'Get_Users':
            return{...state,users:actions.payload}

        case 'qtdPerPage':
            return{...state,qtd_page:actions.payload}

        case 'View_Perfil':
            return{...state,select_perfil:actions.payload}
        
        case 'changeFiltro':
            return{...state,pesquisa:actions.payload}

        case 'ClearFiltro':
            return{...state, pesquisa:actions.payload}

        case 'Clear':
            return{...state,
                nome:actions.nome,
                email:actions.email,
                cpf:actions.cpf,
                rg:actions.rg,
                perfil:actions.perfil,
                telefone:actions.telefone,
                nome_mae:actions.nome_mae,
                nome_pai:actions.nome_pai,
                naturalidade:actions.naturalidade,
                sexo:actions.sexo,
                inscricao:actions.inscricao,
                cep:actions.cep,
                uf:actions.uf,
                cidade:actions.cidade,
                logradouro:actions.logradouro,
                numero:actions.numero,
                bairro:actions.bairro,
                numero_cnh:actions.cnh,
                numero_funcional:actions.funcional,
                vencimento_funcional:actions.data_funcional,
                telefone:actions.telefone,
                data_nascimento:actions.data_nascimento}

        case 'getEdit':
            return{...state,
                nome:actions.nome,
                email:actions.email,
                cpf:actions.cpf,
                rg:actions.rg,
                perfil:actions.perfil,
                telefone:actions.telefone,
                nome_mae:actions.nome_mae,
                nome_pai:actions.nome_pai,
                naturalidade:actions.naturalidade,
                sexo:actions.sexo,
                inscricao:actions.inscricao,
                cep:actions.cep,
                uf:actions.uf,
                cidade:actions.cidade,
                logradouro:actions.logradouro,
                numero:actions.numero,
                bairro:actions.bairro,
                numero_cnh:actions.cnh,
                numero_funcional:actions.funcional,
                vencimento_funcional:actions.data_funcional,
                telefone:actions.telefone,
                data_nascimento:actions.data_nascimento}
        default:
            return state;
    }
}
export default UserReducer;