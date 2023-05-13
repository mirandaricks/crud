import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import TabelaLivros from "./components/TabelaLivros";
import Menu from "./components/Menu";
import CadastrarLivros from "./components/CadastrarLivros";
import NotFound from "./components/NotFound";

class App extends Component {
  state = {
    livros: [
      {
        id: 1,
        isbn: "978-85-7522-403-8",
        titulo: "HTML - Second Edition",
        autor: "Mauricio Samy Silva",
      },
      {
        id: 2,
        isbn: "978-85-7522-807-4",
        titulo: "Introdução ao Pentest",
        autor: "Daniel Moreno",
      },
      {
        id: 3,
        isbn: "978-85-7522-780-8",
        titulo: "Internet das coisas para desenvolvedores",
        autor: "Ricardo da Silva Ogliari",
      },
    ],
  };
  inserirLivro = (livro) => {
    livro.id = this.state.livros.length + 1;
    this.setState({
      livros: [...this.state.livros, livro],
    });
  };

  render() {
    return (
      <Router>
        <Menu />
        <Routes>
          <Route
            path="/"
            element={<TabelaLivros livros={this.state.livros} />}
          />
          <Route
            path="/records"
            element={
              <CadastrarLivros
                inserirLivro={this.inserirLivro}
                livro={{ id: 0, isbn: "", titulo: "", autor: "" }}
              />
            }
          />
          <Route
            path="/editar/:isbnLivro"
            render={(props) => {
              const livro = this.state.livros.find(
                (livro) => livro.isbn === props.match.params.isbnLivro
              );
              if (livro) {
                return <CadastrarLivros editar={this.editarLivros} livro={livro} />


              }else{
                return <Navigate to={"/"} />
              }
            }}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
