import styled from 'styled-components';
export const Nav = styled.nav`
background-color: #cecece;
font-family: Arial, sans-serif;
font-weight: bold;
padding: 10px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
display: flex;
align-items: center;
justify-content: space-between; 
border-top: 3px solid rgb(12, 10, 11);
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; 
  img {
    width: 40px; 
    height: 40px;
  }
`;
export const Ul = styled.ul`
list-style: none;
display: flex;
font-size: 1.2rem;
gap: 20px;
margin: 0;
padding: 0;
`;
export const Li = styled.li`
  a {
    text-decoration: none;
    color: #000;
    transition: color 0.3s ease;
    &:hover {
      color: #007bff; 
    }
  }
`;