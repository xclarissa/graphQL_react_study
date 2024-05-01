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

const MUTATION_ADICIONAR_ITEM = gql`
  mutation AdicionarItem($item: ItemCarrinhoInput!) {
    adicionarItem(item: $item)
  }
`;

export { QUERY_OBTER_CARRINHO, MUTATION_ADICIONAR_ITEM };
