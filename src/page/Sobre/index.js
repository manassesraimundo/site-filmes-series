import React, { useState, useEffect } from "react";
import './Sobre.css';
import { Link } from "react-router-dom";
import api, { key } from "../../services/api";
import { randoBanner } from "../../Random/random";
import Title from "../../Components/Title/inde";
import Footer from '../../Components/Footer';

const Sobre = () => {

    const [banner, setBanner] = useState({});

    const imgFundo = async () => {
        const numeroDecimalAleatorio = Math.random();
        const numeroAleatorioEntreZeroESete = numeroDecimalAleatorio * 7;
        const numeroAleatorioEntreUmESete = Math.floor(numeroAleatorioEntreZeroESete) + 1;

        const respons = await api.get('/discover/movie', {
            params: {
                api_key: key,
                language: 'pt-BR',
                page: numeroAleatorioEntreUmESete,
            }
        });

        const inteval = setInterval(() => {
            setBanner(respons.data.results[randoBanner(respons.data.results)])
        }, 10000);        
    }

    useEffect(() => {
        imgFundo();
    }, [])
    
    return(
        <>
            <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${banner.backdrop_path})`}} className="container">
                <header className="contaneir-Header">
                    <Link to='/' className="contaneir-logo">
                        Logo
                    </Link>

                    <nav className="contaneir-nav">
                        <input type="checkbox" name="checkbox" id="checkbox" className="checkbox"/>
                        <label for="checkbox" className="label-menu"><span className="hamburger"></span></label>
                        <ul className="contaneir-menu">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/movies'>Só Filmes</Link></li>
                            <li><Link to='/series'> Só Séries</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                        </ul>
                    </nav>

                    <div className="title-sebre">
                        <Title title='Sobre Nós' />
                    </div>
                </header>
            </div>

            <main className="main-conteudo">
                <p>Bem-vindo ao nosso site de cartazes de filmes e séries! Aqui você encontrará uma vasta coleção de cartazes cinematográficos e televisivos para satisfazer seu apetite por entretenimento visual. Navegue por nossa extensa galeria e mergulhe no mundo da sétima arte e das emocionantes séries de TV.</p>

                <h3>Destaques do nosso site:</h3>
                <ul>
                    <li><strong>Diversidade de Títulos:</strong> Temos cartazes de uma ampla gama de filmes e séries, desde os clássicos atemporais até os lançamentos mais recentes. Seja qual for o seu gosto ou preferência, você encontrará algo especial para complementar sua coleção.</li>
                    <li><strong>Alta Qualidade e Resolução:</strong> Todos os nossos cartazes são fornecidos em alta resolução para garantir que você desfrute de cada detalhe das imagens. A qualidade excepcional das nossas imagens permitirá que você aprecie verdadeiramente o trabalho artístico por trás dessas produções.</li>
                    <li><strong>Navegação Intuitiva:</strong> Nosso site foi projetado para tornar sua experiência de busca fácil e intuitiva. Você pode explorar filmes e séries por gênero, década, diretor ou atores, facilitando a localização daqueles cartazes que você mais deseja.</li>
                    <li><strong>Personalização:</strong> Se você é um apaixonado colecionador ou simplesmente deseja dar um toque de personalidade ao seu espaço, os cartazes de filmes e séries são excelentes opções de decoração. Encontre cartazes que combinem com seu estilo e personalidade, e crie uma atmosfera única em sua casa ou escritório.</li>
                    <li><strong>Informações Adicionais:</strong> Além dos cartazes, fornecemos informações detalhadas sobre cada filme e série, incluindo sinopse, elenco, classificação e muito mais. É o complemento perfeito para os cinéfilos que buscam mergulhar mais fundo na história por trás das produções.</li>
                    <li><strong>Atualizações Constantes:</strong> Nosso acervo é regularmente atualizado para garantir que você esteja sempre por dentro das últimas tendências e lançamentos cinematográficos e televisivos. Volte sempre para descobrir novos cartazes que vão cativar sua imaginação.</li>
                    <li><strong>Comunidade Engajada:</strong> Junte-se a uma comunidade de amantes do cinema e séries, compartilhando seus favoritos, trocando opiniões e descobrindo novas pérolas cinematográficas e televisivas.</li>
                </ul>

                <p>Explore nosso site de cartazes de filmes e séries hoje mesmo e embarque em uma jornada visual através das produções mais emocionantes e icônicas da história do entretenimento. Aprecie a arte cinematográfica e transforme suas paredes em uma homenagem à magia do cinema e da televisão.</p>
            </main>
            <Footer />
        </>
    )
}

export default Sobre;