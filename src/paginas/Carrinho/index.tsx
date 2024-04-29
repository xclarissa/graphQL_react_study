import TituloPrincipal from "../../componentes/TituloPrincipal";
import { useCarrinho } from "../../graphql/carrinho/hooks";
import ItemCarrinho from "./ItemCarrinho";
import "./Carrinho.css";
import { formatador } from "../../utils/formatador-moeda";
import { AbBotao } from "ds-alurabooks";
import { Link } from "react-router-dom";

const Carrinho = () => {
  const { data } = useCarrinho();

  return (
    <section className="containerItemCarrinho">
      <TituloPrincipal texto="Minha sacola" />

      <div className="conteudo">
        <h3>Itens selecionados</h3>
        <div className="itens">
          {data?.carrinho.itens.map((itemCarrinho, index) => (
            <ItemCarrinho key={index} item={itemCarrinho} />
          ))}
        </div>

        <div>
          <Link to="/">Continuar comprando</Link>
        </div>

        <footer>
          <ul>
            <li>Total da compra</li>
            <li>
              <strong>{formatador.format(data?.carrinho.total || 0)}</strong>
            </li>
            <li>
              <AbBotao texto="Finalizar compra" />
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
};

export default Carrinho;
