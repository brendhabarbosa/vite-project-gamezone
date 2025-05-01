import styled from "styled-components";
export const Form = styled.form`
    width: 100%; 
    height: 100%; 
    background: linear-gradient(90deg, #f0f0f0, #cecece);
    padding: 30px; 
    border-radius: 10px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    max-width: 500px; 
    margin: 20px auto; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px; 
    border-left: 3px solid rgb(12, 10, 11); 
    label {
    display: block; 
    font-weight: bold; 
    }
    input, select {
    padding: 10px; 
    border: 1px solid #ccc; 
    border-radius: 5px; 
    font-size: 1rem; 
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); 
}
    input:focus, select:focus {
    outline: none; 
    border-color: rgb(12, 10, 11); 
    box-shadow: 0 0 5px rgba(12, 10, 11, 0.5);
}
    button {
    background-color: rgb(12, 10, 11); 
    color: #fff; 
    padding: 10px 15px;
    border: none; 
    border-radius: 5px; 
    font-size: 1rem; 
    cursor: pointer; 
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center; 
    justify-content: center; 
    gap: 5px; 
    
}
    button:hover {
    background-color: #333; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); 
    transform: translateY(-2px); 
}
    button:hover {
    background-color: #333; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); 
    transform: translateY(-2px); 
}
`