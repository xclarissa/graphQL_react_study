import ListaLivros from "../../componentes/ListaLivros";
import Loader from "../../componentes/Loader";
import TituloPrincipal from "../../componentes/TituloPrincipal";
import { ICategoria } from "../../interfaces/ICategoria";
import { gql, useQuery } from "@apollo/client";

const Categoria = () => {
    //lugar errado
  const QUERY_CATEGORIAS = gql`
    query ObterCategorias {
      categorias {
        id
        nome
        slug
      }
    }
  `;

  const { data, loading } = useQuery<{ categorias: ICategoria[] }>(
    QUERY_CATEGORIAS
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <section>
      {data?.categorias.map((categoria) => (
        <>
          <TituloPrincipal texto={categoria?.nome ?? ""} />
          <ListaLivros categoria={categoria!} />
        </>
      ))}
    </section>
  );
};

export default Categoria;
