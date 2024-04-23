import { useQuery } from "@apollo/client";
import { ILivro } from "../../interfaces/ILivro";
import { ICategoria } from "../../interfaces/ICategoria";
import { QUERY_GET_LIVROS } from "./queries";
import { livrosVar } from "./state";

export const useLivros = (categoria: ICategoria) => {
  return useQuery<{ livros: ILivro[] }>(QUERY_GET_LIVROS, {
    variables: {
      categoriaId: categoria.id,
    },
    onCompleted(data) {
      if (data?.livros) {
        livrosVar(data?.livros);
      }
    },
  });
};
