import React from "react";
import Header from '../../Components/Header';
import Leyte from "../../Components/Leyte";
import { Title } from "../../Components/Header";
import './Home.css';

const Home = () => {
    return(
        <>
            <Header title='Filmes & Séries' paragrafo='Bem-vindo ao nosso site de cartazes de filmes e séries! Aqui você encontrará uma vasta coleção de cartazes cinematográficos e televisivos para satisfazer seu apetite por entretenimento visual. Navegue por nossa extensa galeria e mergulhe no mundo da sétima arte e das emocionantes séries de TV.'/>
            {/* <div style={{position: 'absolute', bottom: '55%', width: 500}}>
                <Title title='Filmes & Séries' paragrafo='Bem-vindo ao nosso site de cartazes de filmes e séries! Aqui você encontrará uma vasta coleção de cartazes cinematográficos e televisivos para satisfazer seu apetite por entretenimento visual. Navegue por nossa extensa galeria e mergulhe no mundo da sétima arte e das emocionantes séries de TV.'/>
            </div> */}
            <Leyte />
        </>
    );
}

export default Home;