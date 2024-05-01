import { useParams } from "react-router-dom";
import ListaLivros from "../../componentes/ListaLivros";
import Loader from "../../componentes/Loader";
import TituloPrincipal from "../../componentes/TituloPrincipal"; 
import { QUERY_GET_CATEGORIAS } from "../../graphql/livros/queries";
import { useQuery } from "@apollo/client";
import { ICategoria } from "../../interfaces/ICategoria";

const Categoria = () => {
  const { slug } = useParams();

  const { loading, error, data } = useQuery<{categorias: ICategoria[]}>(QUERY_GET_CATEGORIAS);

  if (loading) return  <Loader />;
  if (error) return <p>Ocorreu um erro ao carregar as categorias.</p>;

  if (!data || !data.categorias) {
    return <p>Nenhuma categoria encontrada.</p>;
  }
  console.log(data.categorias, 'data')
  const categoriaEncontrada = data.categorias.find((categoria: ICategoria) => categoria.slug === slug);

  return (
    <section>
      <TituloPrincipal texto={categoriaEncontrada?.nome ?? ""} />
      <ListaLivros categoria={categoriaEncontrada!} />
    </section>
  );
};

export default Categoria;