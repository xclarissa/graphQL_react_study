import TituloPrincipal from "../../componentes/TituloPrincipal";
import { useCarrinho } from "../../graphql/carrinho/hooks";
import ItemCarrinho from "./ItemCarrinho";
import "./Carrinho.css";

const Carrinho = () => {
  const { data } = useCarrinho();

  return (
    <section className="containerItemCarrinho">
      <TituloPrincipal texto="Minha sacola" />
      <div className="itens">
        <h3>Itens selecionados</h3>
        {data?.carrinho.itens.map((itemCarrinho, index) => (
          <ItemCarrinho key={index} item={itemCarrinho} />
        ))}
      </div>
    </section>
  );
};

export default Carrinho;
