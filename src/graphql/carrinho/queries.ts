import { gql } from "@apollo/client";

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

export { QUERY_OBTER_CARRINHO };
