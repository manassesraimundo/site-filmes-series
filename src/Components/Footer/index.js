import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="container-footer">
           <div className="footer">
                 <ul className="menu-footer">
                    <h5>Navegação Rápida:</h5>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/movies'>Só Filmes</Link></li>
                    <li><Link to='/series'> Só Séries</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
                <div>
                    <h5>Política de Privacidade:</h5>
                    <p>Sua privacidade é importante para nós. Leia nossa política de privacidade para entender como coletamos, usamos e protegemos suas informações.</p>
                </div>
                <div>
                    <h5>Termos de Licenciamento de Imagens:</h5>
                    <p>As imagens e cartazes disponíveis em nosso site estão sujeitos a termos de licenciamento específicos. Consulte esta seção para informações adicionais sobre o uso e distribuição das imagens disponíveis.</p>
                </div>
                <div>
                    <h5>Termos de Uso:</h5>
                    <p>Ao utilizar nosso site, você concorda com os termos e condições de uso. Leia os nossos termos para garantir uma experiência segura e satisfatória.</p>
                </div>
           </div>
           <p style={{textAlign: "center"}}> &copy; Filmes & Séries | Todos os direitos reservados. Site desenvolvido por <a href='https://github.com/manassesraimundo' target="_blank">Manassés Raimundo</a></p>
        </footer>
    );
}

export default Footer;