import {Nav, Ul, Li, Div} from './styleheader';
import logo from '/assets/logo.png';
const Header: React.FC = () => {
  return (
    <header>
        <Nav>
          <Div className="logo">
            <img src={logo} alt="Logo GameZone" /> 
            <h1>GameZone</h1>
          </Div>
            <Ul>
                <Li><a href="/">Home</a></Li>
                <Li><a href="/sobre">Sobre</a></Li>
                <Li><a href="/contato">Contato</a></Li>
            </Ul>
        </Nav>
    </header>
  );
};

export default Header;
