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

const QUERY_GET_LIVRO = gql`
  query ObterLivro($slug: String!) {
    livro(slug: $slug) {
      id
      imagemCapa
      descricao
      titulo
      slug
      sobre
      autorId
      autor {
        nome
        sobre
      }
      opcoesCompra {
        id
        titulo
        formatos
        preco
      }
      tags {
        nome
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

const QUERY_OBTER_CARRINHO = gql`
  query ObterCarrinho {
    carrinho {
      total
      itens {
        quantidade
        opcaoCompra {
          preco
        }
        livro {
          titulo
          descricao
          imagemCapa
          autor {
            nome
          }
        }
      }
    }
  }
`;

export {
  QUERY_GET_LIVROS,
  QUERY_GET_LIVRO,
  QUERY_GET_CATEGORIAS,
  QUERY_OBTER_DESTAQUES,
  QUERY_OBTER_CARRINHO
};
