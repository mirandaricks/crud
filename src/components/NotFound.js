import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <h1>Error 404 - Página Não Encontrada!</h1>
    <p>
      <Link to={"/"}>Retornar para Tabela de Livros</Link>
    </p>
  </>
);

export default NotFound;
