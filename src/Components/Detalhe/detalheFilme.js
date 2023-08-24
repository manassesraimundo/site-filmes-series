import React, { useState, useEffect } from "react";
import './styles.css'
import { useSearchParams, Link } from "react-router-dom";
import api, { key } from "../../services/api";

import Title from "../Title/inde";
import start from '../../img/estrela.png';
import Footer from '../../Components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

const DetalheFlime = () => {
    
    const urlFixa = 'https://image.tmdb.org/t/p/original/';
    const [movie, setMovie] = useState([]);
    const [genero, setGenero] = useState([])

    const [searchParams] = useSearchParams();

    const query = searchParams.get('id')

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await api.get(`/movie/${query}`, {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                }
            })
            setMovie(response.data);
            console.log(response.data)
            setGenero(response.data.genres)
        }

        // console.log(query)
        fetchMovie();
    }, [query]);

    useEffect(() => {
        AOS.init(); // Inicialize a biblioteca AOS
      }, []);
  
    return(
        <>
            <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}} className="container">
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
                        <Title title='Detalhes do filme' />
                    </div>
                </header> 
            </div>

            <section className="section-detalhe" data-aos="fade-right" data-aos-delay="500">
                <picture>
                    <img src={urlFixa + movie.poster_path} alt="imagem do filme"  width='500px'/>
                </picture>
                <div className="conteudo" data-aos="fade-left" data-aos-delay="500">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <h3>Slogan: {movie.tagline}</h3>
                    <div>
                        <p>Lingua: {movie.original_language}</p>
                        <p> <img src={start} width='20px'/>: {(movie.vote_average)}</p>
                        <p>Ano de lançamento em: {movie.release_date}</p>
                        <p>Gêneros: {genero.map((item) => <span key={item.id}>{item.name} </span>)}</p>
                        <a href={movie.homepage} target="_blank">Ver site</a>
                    </div>
                </div>
            </section>

            <section className="paragrafo">
                <h2>Explore Além dos Cartazes: Mergulhe no Universo Cinematográfico e Televisivo!</h2>
                <p>Aqui em nosso site, oferecemos mais do que apenas cartazes de filmes e séries. Queremos que você explore e desfrute de todo o universo cinematográfico e televisivo. Prepare-se para uma experiência completa, repleta de conteúdos adicionais que vão enriquecer sua paixão pelo entretenimento.</p>
            </section>

            <Footer/>
        </>
    )
}

export default DetalheFlime;