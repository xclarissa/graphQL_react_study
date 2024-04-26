import { useQuery } from "@apollo/client";
import { ILivro } from "../../interfaces/ILivro";
import { QUERY_GET_LIVRO } from "./queries";

export const useLivro = (slug: string) => {
  return useQuery<{ livro: ILivro }>(QUERY_GET_LIVRO, {
    variables: {
        slug
    },
  });
};
