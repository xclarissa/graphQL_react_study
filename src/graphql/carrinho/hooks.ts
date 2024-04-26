import { useQuery } from "@apollo/client";
import { QUERY_OBTER_CARRINHO } from "./queries";
import { ICarrinho } from "../../interfaces/ICarrinho";

export const useCarrinho = () => {
  return useQuery<{ carrinho: ICarrinho }>(QUERY_OBTER_CARRINHO);
}