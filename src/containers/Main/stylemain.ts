import styled from "styled-components";
export const Main = styled.main`
    display: flex; 
    flex-wrap: wrap; 
    gap: 20px; 
    font-family: Arial, sans-serif;
    justify-content: center; 
    align-items: center; 
    padding: 20px;
    div.descricao {
        display: flex; 
        align-items: center; 
        justify-content: center; 
        gap: 20px; 
        text-align: center; 
        font-size: 1.2rem; 
        color: #333; 
        background-color: #f8f8f8; 
        padding: 20px; 
        border-radius: 10px; 
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
    img {
    width: 180px; 
    height: auto; 
    border-radius: 8px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex-shrink: 0; 
}
    p {
    margin: 0; 
    text-align: justify; 
}
    time{
        font-weight: bold;
}
    #data {
    background: linear-gradient(90deg, #f0f0f0, #cecece);
    width: 300px; 
    padding: 100px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    border-left: 3px solid rgb(12, 10, 11); 
    font-family: Arial, sans-serif; 
    font-size: 1.2rem; 
    color: rgb(12, 10, 11);
    text-align: center; `