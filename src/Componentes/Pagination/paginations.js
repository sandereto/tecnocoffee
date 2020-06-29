import React from 'react'

//Função de Paginação
export const pagination = (current_page,get,last_page)=>{
    let items = [];
    
    
        //Verifica e cria o botão anterior na paginação
    if(current_page === 1){
        items.push(
            <li className="paginate_button page-item disabled"></li>
        )
    }else{
        items.push(
            <li className="paginate_button page-item">
                <a href="#/" className="page-link" onClick={()=>get(current_page-1)}>Anterior</a>
            </li>
        )
    }
        
    var n = 10
    
    if(last_page<=n){
        
        //Verifica e cria as paginações para exibir de 1 à 10 páginas
        for(let i=1;i<=last_page;i++){ 
            if(i === current_page){
            items.push(
                <li className="paginate_button page-item active">
                    <a href="#/" className="page-link" onClick={()=>get(i)}>{i}</a>
                </li>
            )
            }else{
                items.push(
                    <li className="paginate_button page-item">
                        <a href="#/" className="page-link" onClick={()=>get(i)}>{i}</a>
                    </li>
                )
            }
        }
    }else 
        //Verifica e cria as paginações para acima de 10 páginas;
        
        if(current_page - (n/2) <= 1)
            var inicio = 1;
        else if(last_page - current_page < n)
             inicio = last_page - n  + 1
        else
            inicio = current_page - (n/2)

        var fim = inicio + n - 1
    
    for(let i=inicio;i<=fim;i++){ 
            
        if(i === current_page){
            items.push(
                <li className="paginate_button page-item active">
                    <a href="#/" className="page-link" onClick={()=>get(i)}>{i}</a>
                </li>
            )			
        }else{
            items.push(
                <li className="paginate_button page-item">
                    <a href="#/" className="page-link" onClick={()=>get(i)}>{i}</a>
                </li>
            )
        }
        
    }
    
    //Verifica e cria o Botão próximo
    if(last_page === current_page){
        items.push(
            <li className="paginate_button page-item disabled"></li>
        )
    }else{
        items.push(
            <li>
                <a href="#/" className="page-link" onClick={()=>get(current_page + 1)}>Próximo</a>
            </li>
        )
    }
    
    return items;

        
    }


