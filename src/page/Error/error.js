import React from 'react';
import { Link } from 'react-router-dom';
import './error.css';

const Error = () => {
    return(
        <div className='container-error'>
            <h2>Erro Página não encontrada</h2>

            <div>
                <Link to='/'>Voltar a página Home</Link>

            </div>
        </div>
    )
}

export default Error;