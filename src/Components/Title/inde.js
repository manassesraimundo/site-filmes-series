import React from "react";
import './Title.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Title({ title, paragrafo }) {

    useEffect(() => {
        AOS.init(); // Inicialize a biblioteca AOS
    }, []);
    
    return (
        <div className="div-title" data-aos="flip-down" data-aos-delay="400">
            <h1>{title}</h1>
            <p>{paragrafo}</p>
        </div>
    );
}

export default Title;