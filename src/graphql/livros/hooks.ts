import { useQuery, useReactiveVar } from "@apollo/client";
import { ICategoria } from "../../interfaces/ICategoria";
import { ILivro } from "../../interfaces/ILivro";
import { QUERY_GET_CATEGORIAS } from "../../graphql/livros/queries";
import { QUERY_GET_LIVROS, QUERY_GET_LIVRO } from "../../graphql/livros/queries";
import { filtroLivrosVar, livrosVar } from "../../graphql/livros/state";

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


export const useLivro = (slug: string) => {
  return useQuery<{ livro: ILivro }>(QUERY_GET_LIVRO, {
    variables: {
        slug
    },
  });
};


export const useCategorias = () => {
  return useQuery<{ categorias: ICategoria[] }>(QUERY_GET_CATEGORIAS);
};

