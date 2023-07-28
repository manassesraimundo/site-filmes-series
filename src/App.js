import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Shearch from "./page/Shearch";
import Movies from './page/Movies';
import Series from './page/Series';
import Sobre from "./page/Sobre";
import DetalheFlime from "./Components/Detalhe/detalheFilme"
import DetalheSerie from "./Components/Detalhe/detalheSerie"

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path="/shearch" Component={Shearch} />
          <Route path="/movies" Component={Movies} />
          <Route path="/series" Component={Series} />
          <Route path="/sobre" Component={Sobre} />
          <Route path="/detalheFilme" Component={DetalheFlime} />
          <Route path="/detalheSerie" Component={DetalheSerie} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;