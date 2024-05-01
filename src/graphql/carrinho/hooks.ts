import { useMutation, useQuery } from "@apollo/client";
import { MUTATION_ADICIONAR_ITEM, QUERY_OBTER_CARRINHO } from "./queries";
import { ICarrinho } from "../../interfaces/ICarrinho";

export const useCarrinho = () => {
  return useQuery<{ carrinho: ICarrinho }>(QUERY_OBTER_CARRINHO);
};

export const useAdicionarItem = () => {
  return useMutation(MUTATION_ADICIONAR_ITEM);
};
