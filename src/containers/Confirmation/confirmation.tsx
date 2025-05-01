import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import { useEffect, useState } from 'react';
import {Div} from "./styleconfirmation";

const Confirmation = () => {
    const [dados, setDados] = useState({
        nome: "",
        usuario: "",
        email: "",
        jogo: ""
    });
    useEffect(() => {
        const recuperarDados =  localStorage.getItem("dados");
        if (recuperarDados) {
            setDados(JSON.parse(recuperarDados));   
        } 
    }
    , []);

    return (
        <div className="container">
        <Header />
            <Div>
                <h2>Inscrição Confirmada!</h2>
                <p>Você está oficialmente inscrito no campeonato GameZone.</p>
                <p>Fique atento às atualizações e prepare-se para competir!</p>
            </Div>

            <Div>
                <h2>Dados do Inscrito</h2>
                <p>Nome: {dados.nome}</p>
                <p>Usuário: {dados.usuario}</p>
                <p>Email: {dados.email}</p>
                <p>Jogo: {dados.jogo}</p>
            </Div>
        <Footer />
        </div>


    );
    }
export default Confirmation;