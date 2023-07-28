import React, { useState, useEffect } from "react";
import Header from '../../Components/Header';
import { Title } from "../../Components/Header";

import { useNavigate } from "react-router-dom";

import start from '../../img/estrela.png'

import api, { key } from "../../services/api";
import Footer from "../../Components/Footer";

const Movies = () => {

    const urlFixa = 'https://image.tmdb.org/t/p/original/';
    const navigate = useNavigate();

    const[popularFimles, setPopularFilmes] = useState([])
    const[nowMovies, setNowMovies] = useState([])
    const[votesFimles, setTopFilmes] = useState([])
    const[moviesProximo, setMoviesProximo] = useState([])

    const carregarFilmes = async () => {
        const numeroDecimalAleatorio = Math.random();
        const numeroAleatorioEntreZeroESete = (numeroDecimalAleatorio * 7)
        const numeroAleatorioEntreUmESete = Math.floor(numeroAleatorioEntreZeroESete) + 1;

        const [popular, nowMovies, masVotado, proximoMovies] = await Promise.all([
            // Popular filmes
            api.get('/movie/popular', {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                    page: numeroAleatorioEntreUmESete,
                }
            }),
            // now movies
            api.get('/movie/now_playing', {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                    page: numeroAleatorioEntreUmESete,
                }
            }),
            // top filmes
            api.get('/movie/top_rated', {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                    page: numeroAleatorioEntreUmESete,
                }
            }),
            // proximo
            api.get('/movie/upcoming', {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                    page: numeroAleatorioEntreUmESete,
                }
            })
        ])

        const dataPopular = popular.data.results.slice(0, 12)
        const dataNowMovies = nowMovies.data.results.slice(0, 12)
        const dataMasVotado = masVotado.data.results.slice(0, 12)
        const dataProximo = proximoMovies.data.results.slice(0, 12)

        setPopularFilmes(dataPopular)
        setNowMovies(dataNowMovies)
        setTopFilmes(dataMasVotado)
        setMoviesProximo(dataProximo)
    }

    useEffect(() => {
        carregarFilmes();
    }, [])
    
    const navegarFlime = (id) => {
        navigate(`/detalheFilme?id=${id}`)
    }

    return(
        <>          
            <Header title='Só Filmes' paragrafo='Bem-vindo ao nosso site de cartazes de filmes e séries! Aqui você encontrará uma vasta coleção de cartazes cinematográficos e televisivos para satisfazer seu apetite por entretenimento visual. Navegue por nossa extensa galeria e mergulhe no mundo da sétima arte e das emocionantes séries de TV.'/>
            <main>
                <h2 className="title">Filmes</h2>
                <div className="contaner-main">
                    <div className="container-img">
                        {nowMovies.map((item) => (
                            <div key={item.id} className="imagem" onClick={() => navegarFlime(item.id)}>
                                <picture>
                                    <img src={item.poster_path? urlFixa + item.poster_path : start} alt="imagen de filme" />
                                </picture>
                                <div className="info-serie">
                                    <p>{item.title}</p>
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

                <h2 className="title">Os filmes mas populares</h2>
                <div className="contaner-main">
                    <div className="container-img">
                        {popularFimles.map((item) => (
                            <div key={item.id} className="imagem" onClick={() => navegarFlime(item.id)}>
                                <picture>
                                    <img src={item.poster_path? urlFixa + item.poster_path : start} alt="imagen de filme" />
                                </picture>
                                <div className="info-serie">
                                    <p>{item.title}</p>
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

                <h2 className="title">Os filmes mas votados</h2>
                <div className="contaner-main">
                    <div className="container-img">
                        {votesFimles.map((item) => (
                            <div key={item.id} className="imagem" onClick={() => navegarFlime(item.id)}>
                                <picture>
                                    <img src={item.poster_path? urlFixa + item.poster_path : start} alt="imagen de filme" />
                                </picture>
                                <div className="info-serie">
                                    <p>{item.title}</p>
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

                <h2 className="title">Próximos filmes</h2>
                <div className="contaner-main">
                    <div className="container-img">
                        {moviesProximo.map((item) => (
                            <div key={item.id} className="imagem" onClick={() => navegarFlime(item.id)}>
                                <picture>
                                    <img src={item.poster_path? urlFixa + item.poster_path : start} alt="imagen de filme" />
                                </picture>
                                <div className="info-serie">
                                    <p>{item.title}</p>
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

            <Footer />
        </>
    )
}

export default Movies;