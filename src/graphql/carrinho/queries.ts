import { gql } from "@apollo/client";

const QUERY_OBTER_CARRINHO = gql`
  query ObterCarrinho {
    carrinho {
      total
      itens {
        quantidade
        opcaoCompra {
          id
          preco
        }
        livro {
          id
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

const MUTATION_REMOVER_ITEM = gql`
  mutation RemoverItem($item: ItemCarrinhoInput!) {
    removerItem(item: $item)
  }
`;

export { QUERY_OBTER_CARRINHO, MUTATION_ADICIONAR_ITEM, MUTATION_REMOVER_ITEM };
