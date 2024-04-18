import { ICategoria } from "../../interfaces/ICategoria";
import { obterProdutosDaCategoria } from "../../http";
import { AbCampoTexto } from "ds-alurabooks";
import CardLivro from "../CardLivro";
import { gql, useQuery } from "@apollo/client";

import "./ListaLivros.css";
import { ILivro } from "../../interfaces/ILivro";

interface ListaLivrosProps {
  categoria: ICategoria;
}

// O APOLLO CLIENT SEMPRE MANDA REQUISIÇOES USANDO O VERBO POST
// const OBTER_QUERY = gql`
//   query ObterLivros($categoriaId: Int) {
//     livros(categoriaId: $categoriaId) {
//       id
//       slug
//       titulo
//       imagemCapa
//       opcoesCompra {
//         id
//         preco
//       }
//     }
//   }
// `;
const OBTER_QUERY = gql`
  query ObterLivros($titulo: String!) {
    livros(titulo: $titulo) {
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
  const { data } = useQuery<{ livros: ILivro[] }>(OBTER_QUERY, {
    variables: {
      categoriaId: categoria.id,
    },
  });
  console.log(data);

  return (
    <section className="lista-livros">
      <AbCampoTexto label="Buscar" value={"nome"} onChange={() => null} />
      <section className="livros">
        {data?.livros.map((livro) => (
          <CardLivro livro={livro} key={livro.id} />
        ))}
      </section>
    </section>
  );
};

export default ListaLivros;
