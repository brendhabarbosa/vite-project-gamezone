import jogadores from '/assets/jogadores.jpg';
import { Main as MainElement } from './stylemain';
import Form from '../Form/form';
import { useEffect, useState } from 'react';

const dataEvento = new Date("2025-04-15T18:00:00").getTime(); 

const Main: React.FC = () => {
    const [contagem, setContagem] = useState("Carregando contagem regressiva...");
    const [intervalo, setIntervalo] = useState<number>();

    useEffect(() => {
        setIntervalo(setInterval(() => {
            exibirTempoRestante();
        }, 1000));
    }, [])

    function exibirTempoRestante() {
        let dataAtual = new Date(); 
        let diferenca = dataEvento - dataAtual.getTime(); 
        if (diferenca > 0) {
            let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            let horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            let segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
            setContagem(`${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`);
        // }
        } else {
            setContagem("O evento já começou!");

            if (intervalo !== undefined) 
            clearInterval(intervalo); 
        }
    }
    

  return (
    <MainElement>
        <div className="descricao">
            <h1>GameZone</h1>
            <p>Bem-vindo à GameZone, o mais novo campeonato de jogos eletrônicos do pedaço!
            Participe de competições emocionantes e mostre suas habilidades nos jogos mais populares.
            Inscreva-se agora e faça parte da nossa comunidade de gamers!</p>
            <img src={jogadores} alt="Meninos jogando em um campeonato"/>
        </div>
        <div id="data">
            <p>O evento acontecerá no dia 15 de abril de 2025, às 18:00.</p>
            <p id="contagem">{contagem}</p>
        </div>
        <Form/>
    </MainElement> 
  );
}

export default Main; 