import React, { useState, useEffect } from "react";
import './Header.css';
import api, { key } from '../../services/api';
import { randoBanner } from '../../Random/random';
import { useNavigate, Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = ({ title, paragrafo}) => {

    // const urlFixa = 'https://image.tmdb.org/t/p/original'; // URL fixa de imagem
    const [banner, setBanner] = useState({});
    const [input, setInput] = useState('')
    const navigate = useNavigate();

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

    useEffect(() => {
        AOS.init(); // Inicialize a biblioteca AOS
      }, []);

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        if(!input) return
        navigate(`/shearch?q=${input}`);
        setInput('');
    }   

    return(
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

                <div className="div-title" data-aos="flip-down" data-aos-delay="400">
                    <h1>{title}</h1>
                    <p>{paragrafo}</p>
                </div>
                
                <div className="div-input">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Filme ou série" value={input} onChange={(evt) => setInput(evt.target.value)} />
                        <button type="submit">Pesquisar</button>
                    </form>
                </div>
            </header>
        </div>
    );
}

export default Header;