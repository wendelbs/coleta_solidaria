import React from "react";
import { Routes,
          Route, 
          BrowserRouter,
        } from "react-router-dom";

import Home from "./routes/home";
import Sobre from "./routes/sobre";
import Cadastro from "./routes/cadastro";
import Instituicoes from "./routes/instituicoes";
import Produtos from "./routes/produtos";
import Login from "./routes/login";
import Layout  from "./routes/pagelayout"


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/instituicoes" element={<Instituicoes />} />
        <Route path="/produtos" element={<Produtos />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

