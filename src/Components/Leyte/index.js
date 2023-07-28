import React, { useState, useEffect } from "react";
import './Leyte.css';
import api, { key } from '../../services/api';
import start from '../../img/estrela.png';
import Footer from "../Footer";

import { useNavigate } from "react-router-dom";

const Leyte = () => {

    const urlFixa = 'https://image.tmdb.org/t/p/original/';
    const navigate = useNavigate();
    const [filmes, setFilmes] = useState([]);
    const [serie, setSerie] = useState([]);

    const carregarFilmes = async () => {
        const numeroDecimalAleatorio = Math.random();
        const numeroAleatorioEntreZeroESete = (numeroDecimalAleatorio * 7)
        const numeroAleatorioEntreUmESete = Math.floor(numeroAleatorioEntreZeroESete) + 1;

        try {
            const [responsFilmes, responsSeries] = await Promise.all([
                // pegar filmes
                api.get('/discover/movie', {
                    params:{
                        api_key: key,
                        language: 'pt-BR',
                        page: numeroAleatorioEntreUmESete,
                    }
                }),
                // pegar series
                api.get('/discover/tv', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: numeroAleatorioEntreUmESete,
                    }
                })
            ]) 
    
            // setFilmes(responsFilmes.data.results);
            // console.log(responsFilmes.data.results);
            // console.log(responsSeries.data.results)
            const filmesExibidos = responsFilmes.data.results.slice(0, 12); // Determinar numero de filmes que serao exibido na tela com a funcao slice(inicio, fim)
            const seriesExibidos = responsSeries.data.results.slice(0, 12);
            setFilmes(filmesExibidos);
            setSerie(seriesExibidos);
        }
        catch (error) {
            console.log(error)
        }  
    }

    useEffect(() => {
        carregarFilmes();
    }, [])

    const navegarFlime = (id) => {
        navigate(`/detalheFilme?id=${id}`)
    }

    const navegarSerie = (id) => {
        navigate(`/detalheSerie?id=${id}`)
    }

    return(
        <>
            <main>
                <h2 className="title">Filmes</h2>
                <div className="contaner-main">
                    <div className="container-img">
                        {filmes.map((item) => (
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

                <h2 className="title">Séries</h2>
                <div className="contaner-main">
                    <div className="container-img">
                        {serie.map((item) => (
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

            <Footer />
        </>
    );
}

export default Leyte;