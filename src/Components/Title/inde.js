import React from "react";
import './Title.css';

function Title({ title, paragrafo }) {
    return (
        <div className="div-title">
            <h1>{title}</h1>
            <p>{paragrafo}</p>
        </div>
    );
}

export default Title;