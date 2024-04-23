import { useQuery } from "@apollo/client";
import { ILivro } from "../../interfaces/ILivro";
import { ICategoria } from "../../interfaces/ICategoria";
import OBTER_QUERY from "./querie";

export const useLivros = (categoria : ICategoria) => {
  return useQuery<{ livros: ILivro[] }>(OBTER_QUERY, {
    variables: {
      categoriaId: categoria.id,
    },
  });
};
