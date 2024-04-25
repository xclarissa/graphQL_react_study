import { gql } from "@apollo/client";

const QUERY_GET_LIVROS = gql`
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

const QUERY_GET_CATEGORIAS = gql`
  query ObterCategorias {
    categorias {
      id
      nome
      slug
    }
  }
`;

const QUERY_OBTER_DESTAQUES = gql`
  query ObterDestaques {
    destaques {
      lancamentos {
        id
        slug
        titulo
        imagemCapa
        opcoesCompra {
          id
          preco
        }
      }
      maisVendidos {
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
  }
`;

export { QUERY_GET_LIVROS, QUERY_GET_CATEGORIAS, QUERY_OBTER_DESTAQUES };
