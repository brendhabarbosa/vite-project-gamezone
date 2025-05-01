import {Form as FormElement} from "../Form/styleform";
import {useState} from 'react';

const Form: React.FC = () => {
    const [nome, setNome] = useState("");
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [jogo, setJogo] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    function handleSubmit(event: React.FormEvent) {
        const dados = {
            nome: nome, 
            usuario: usuario,
            email: email,
            jogo: jogo,
            senha: senha}
        event.preventDefault(); 
        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        } else{
            localStorage.setItem("dados", JSON.stringify(dados));
            window.location.href = "/confirmation";


        }
    }



  return (
    <FormElement onSubmit={handleSubmit}>
        <h2>Inscreva-se agora!</h2>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        <label htmlFor="usuario">Usuário:</label>
        <input type="text" id="usuario" name="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="jogo">Jogo:</label>
        <select id="jogo" name="jogo" value={jogo} onChange={(e) => setJogo(e.target.value)} required>
            <option value="">Selecione um jogo</option>
            <option value="lol">League of Legends</option>
            <option value="csgo">Counter-Strike: Global Offensive</option>
            <option value="dota2">Dota 2</option>
        </select>
        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <label htmlFor="confirmarSenha">Confirmar Senha:</label>    
        <input type="password" id="confirmarSenha" name="confirmarSenha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required />
        <button type="submit">Inscrever-se</button>
    </FormElement>
  );
}
export default Form;