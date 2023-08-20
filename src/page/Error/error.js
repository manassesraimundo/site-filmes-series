import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return(
        <div>
            <h2>Erro Página não encontrada</h2>

            <div>
                <Link to='/'>Voltar a página Home</Link>

            </div>
        </div>
    )
}

export default Error;