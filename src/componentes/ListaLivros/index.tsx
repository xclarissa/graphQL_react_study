import { ICategoria } from "../../interfaces/ICategoria";
import { AbBotao, AbCampoTexto } from "ds-alurabooks";
import CardLivro from "../CardLivro";
import { gql, useQuery } from "@apollo/client";

import "./ListaLivros.css";
import { ILivro } from "../../interfaces/ILivro";
import { useState } from "react";

interface ListaLivrosProps {
  categoria: ICategoria;
}

// O APOLLO CLIENT SEMPRE MANDA REQUISIÇOES USANDO O VERBO POST
const OBTER_QUERY = gql`
  query ObterLivros($categoriaId: Int, $titulo: String) {
    livros(categoriaId: $categoriaId, titulo: $titulo) {
      id
      slug
      titulo
      imagemCapa
      opcoesCompra {
        id
        preco
      }
    }
  }
`;

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
  const [textoBusca, setTextoDaBusca] = useState("");

  const { data, refetch } = useQuery<{ livros: ILivro[] }>(OBTER_QUERY, {
    variables: {
      categoriaId: categoria.id
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (textoBusca) {
      refetch({
        categoriaId: categoria.id,
        titulo: textoBusca,
      });
    }
  };

  return (
    <section>
      <form
        style={{ maxWidth: "80%", margin: "0 auto", textAlign: "center" }}
        onSubmit={handleSubmit}
      >
        <AbCampoTexto
          value={textoBusca}
          onChange={setTextoDaBusca}
          placeholder="Digite o título"
        />
        <div style={{ marginTop: "16px" }}>
          <AbBotao texto="Buscar" />
        </div>
      </form>
      <div className="livros">
        {data?.livros.map((livro) => (
          <CardLivro livro={livro} key={livro.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaLivros;
