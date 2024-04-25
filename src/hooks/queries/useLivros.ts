import { useQuery, useReactiveVar } from "@apollo/client";
import { ILivro } from "../../interfaces/ILivro";
import { QUERY_GET_LIVROS } from "./queries";
import { filtroLivrosVar, livrosVar } from "./state";

export const useLivros = () => {
  const filtro = useReactiveVar(filtroLivrosVar);
  return useQuery<{ livros: ILivro[] }>(QUERY_GET_LIVROS, {
    variables: {
        categoriaId: filtro.categoria?.id,
        titulo: filtro.titulo
    },
    onCompleted(data) {
        if (data.livros) {
            livrosVar(data.livros)
        }
    },
})
};
