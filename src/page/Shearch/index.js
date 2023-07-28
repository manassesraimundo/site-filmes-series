import React, { useState, useEffect } from "react"; 
import './Shearch.css';
import Header from "../../Components/Header"; 
import Footer from '../../Components/Footer';
import start from '../../img/estrela.png';

import { Title } from "../../Components/Header";

import axios from 'axios';
import { useSearchParams, useNavigate } from "react-router-dom";

const Shearch = () => {

    const urlFixa = 'https://image.tmdb.org/t/p/original/';
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const [resultMovies, setResultMovies] = useState([])
    const [resultSeries, setResultSeries] = useState([])

    const query = searchParams.get('q') // pegar parametro da url, valor que resebe o (q)

    async function pesquisar()  {
        const numeroDecimalAleatorio = Math.random();
        const numeroAleatorioEntreZeroESete = (numeroDecimalAleatorio * 7)
        const numeroAleatorioEntreUmESete = Math.floor(numeroAleatorioEntreZeroESete) + 1;
        
        try {
            const resulteFilmes = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=ed6f4a6bc18632ea47caae1b478ca5c0&language`)
            const resultSeries = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${query}&api_key=ed6f4a6bc18632ea47caae1b478ca5c0&language&${numeroAleatorioEntreUmESete}`)

            const dataMovies = resulteFilmes.data.results;
            const dataSeries = resultSeries.data.results;

            // console.log(dataMovies)
            // console.log(dataSeries)
            setResultMovies(dataMovies);    
            setResultSeries(dataSeries);

        }
        catch (error){
            console.log(error)
        } 
    } 
    
    useEffect(() => {
        pesquisar()
    }, [query])

    const navegarFlime = (id) => {
        navigate(`/detalheFilme?id=${id}`)
    }

    const navegarSerie = (id) => {
        navigate(`/detalheSerie?id=${id}`)
    }

    return(
        <div>
            <Header title='Filmes & Séries' paragrafo='Bem-vindo ao nosso site de cartazes de filmes e séries! Aqui você encontrará uma vasta coleção de cartazes cinematográficos e televisivos para satisfazer seu apetite por entretenimento visual. Navegue por nossa extensa galeria e mergulhe no mundo da sétima arte e das emocionantes séries de TV.'/>
           <h1 className="h1">Resultado da busca para: {query}</h1>
           <main>
                <h2 className="title">Em filmes</h2>
                <div className="contaner-main">
                    <div className="container-img">
                        {resultMovies.map((item) => (
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

                <h2 className="title">Em séries</h2>
                <div className="contaner-main">
                    <div className="container-img">
                        {resultSeries.map((item) => (
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
            </main>
           <Footer />
        </div>
    );
}

export default Shearch;