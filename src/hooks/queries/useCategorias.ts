import { useQuery } from "@apollo/client";
import { ICategoria } from "../../interfaces/ICategoria";
import { QUERY_GET_CATEGORIAS } from "./queries";

export const useCategorias = () => {
  return useQuery<{ categorias: ICategoria[] }>(QUERY_GET_CATEGORIAS);
};
