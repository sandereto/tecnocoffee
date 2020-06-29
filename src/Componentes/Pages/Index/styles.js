import styled from "styled-components";


export const Wrapper = styled.div`
    /* background-image: url("Imagens/home_index.jpeg");
    display: table;
    width: 100%;
    height: 100vh;
    padding: 100px 0;   
    background-position: 50% 50%;
    background-size: cover;
    display: flex; */
`;
export const Content = styled.div`
    
    
    overflow: hidden; /* para que não tenha rolagem se a imagem de fundo for maior que a tela */
    width: 100%;
    height: 100%;
    position: relative; 
    background-image: url("Imagens/home_index.jpeg");
    display: table;
    width: 100%;
    height: 100vh;
    background-position: 50% 50%;
    background-size: cover;
    
`;

export const TextContent = styled.div`

        
    margin-top:30px;
    font-size:25px;
    padding:20px;
    width:100%;
    color:#FFF;
    font-weight:700;
    font-family: 'Lato', sans-serif;
    
`;

export const ContentWrapper = styled.div`

    background: rgba(0,0,0,.4);
    /* position:relative; */
    width: 100%;
    height: 100%;
    /* padding: 100px 0;    */
    /* background-position: 50% 50%; */
    /* background-size: cover; */
    /* display: flex; */

`;


