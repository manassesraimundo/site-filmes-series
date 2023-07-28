import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import { Title } from "../../Components/Header";

import { useNavigate } from "react-router-dom";

import start from '../../img/estrela.png'

import api, { key } from "../../services/api";
import Footer from "../../Components/Footer";

const Series = () => {

    const urlFixa = 'https://image.tmdb.org/t/p/original/';
    const navigate = useNavigate();

    const[popularSeries, setPopularSeries] = useState([])
    const[serieNoAr, setSerieNoAr] = useState([])
    const[topSerie, setTopSerie] = useState([])
    const[serieExibicao, setSerieExibicao] = useState([])

    const carregarFilmes = async () => {
        const numeroDecimalAleatorio = Math.random();
        const numeroAleatorioEntreZeroESete = (numeroDecimalAleatorio * 7)
        const numeroAleatorioEntreUmESete = Math.floor(numeroAleatorioEntreZeroESete) + 1;

        const [popular, serieNoAr, masVotado, seireEmExibicao] = await Promise.all([
            // Popular series
            api.get('/tv/popular', {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                    page: numeroAleatorioEntreUmESete,
                }
            }),
            // series mas votado
            api.get('/tv/top_rated', {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                    page: numeroAleatorioEntreUmESete,
                }
            }),
            // series no ar
            api.get('/tv/on_the_air', {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                    page: numeroAleatorioEntreUmESete,
                }
            }),
            // serie em exibiçao hoje
            api.get('/tv/airing_today', {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                    page: numeroAleatorioEntreUmESete,
                }
            })
        ])

        const dataPopular = popular.data.results.slice(0, 12)
        const dataNowMovies = serieNoAr.data.results.slice(0, 12)
        const dataMasVotado = masVotado.data.results.slice(0, 12)
        const dataProximo = seireEmExibicao.data.results.slice(0, 12)

        setPopularSeries(dataPopular)
        setSerieNoAr(dataNowMovies)
        setTopSerie(dataMasVotado)
        setSerieExibicao(dataProximo)
    }

    useEffect(() => {
        carregarFilmes();
    }, [])
    
    const navegarSerie = (id) => {
        navigate(`/detalheSerie?id=${id}`)
    }

    return(
        <>
            <Header title='Só Séries' paragrafo='Bem-vindo ao nosso site de cartazes de filmes e séries! Aqui você encontrará uma vasta coleção de cartazes cinematográficos e televisivos para satisfazer seu apetite por entretenimento visual. Navegue por nossa extensa galeria e mergulhe no mundo da sétima arte e das emocionantes séries de TV.'/>         
            <main>
                <h2 className="title">Séries no ar</h2>
                <div className="contaner-main">
                    <div className="container-img">
                        {serieNoAr.map((item) => (
                            <div key={item.id} className="imagem" onClick={() => navegarSerie(item.id)}>
                                <picture>
                                    <img src={item.poster_path? urlFixa + item.poster_path : start} alt="imagen de série" />
                                </picture>
                                <div className="info-serie">
                                    <p>{item.name}</p>
                                    <div className="votos">
                                        <img src={start} />
                                        <span>
                                            {(item.vote_average).toFixed(1)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <h2 className="title">Séries em exibição</h2>
                <div className="contaner-main">
                    <div className="container-img">
                        {serieExibicao.map((item) => (
                            <div key={item.id} className="imagem" onClick={() => navegarSerie(item.id)}>
                                <picture>
                                    <img src={item.poster_path? urlFixa + item.poster_path : start} alt="imagen de série" />
                                </picture>
                                <div className="info-serie">
                                    <p>{item.name}</p>
                                    <div className="votos">
                                        <img src={start} />
                                        <span>
                                            {(item.vote_average).toFixed(1)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <h2 className="title">Séries mas populares</h2>
                <div className="contaner-main">
                    <div className="container-img">
                        {popularSeries.map((item) => (
                            <div key={item.id} className="imagem" onClick={() => navegarSerie(item.id)}>
                                <picture>
                                    <img src={item.poster_path? urlFixa + item.poster_path : start} alt="imagen de série" />
                                </picture>
                                <div className="info-serie">
                                    <p>{item.name}</p>
                                    <div className="votos">
                                        <img src={start} />
                                        <span>
                                            {(item.vote_average).toFixed(1)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <h2 className="title">Séries mas votados</h2>
                <div className="contaner-main">
                    <div className="container-img">
                        {topSerie.map((item) => (
                            <div key={item.id} className="imagem" onClick={() => navegarSerie(item.id)}>
                                <picture>
                                    <img src={item.poster_path? urlFixa + item.poster_path : start} alt="imagen de série" />
                                </picture>
                                <div className="info-serie">
                                    <p>{item.name}</p>
                                    <div className="votos">
                                        <img src={start} />
                                        <span>
                                            {(item.vote_average).toFixed(1)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <section className="paragrafo">
                    <h2>Explore Além dos Cartazes: Mergulhe no Universo Cinematográfico e Televisivo!</h2>
                    <p>Aqui em nosso site, oferecemos mais do que apenas cartazes de filmes e séries. Queremos que você explore e desfrute de todo o universo cinematográfico e televisivo. Prepare-se para uma experiência completa, repleta de conteúdos adicionais que vão enriquecer sua paixão pelo entretenimento.</p>
                </section>
            </main>

            <Footer/>
        </>
    )
}

export default Series;