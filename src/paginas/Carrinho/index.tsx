import TituloPrincipal from "../../componentes/TituloPrincipal";
import ItemCarrinho from "./ItemCarrinho";
import { formatador } from "../../utils/formatador-moeda";
import { AbBotao } from "ds-alurabooks";
import { Link } from "react-router-dom";
import { useCarrinhoContext } from "../../contexts/CarrinhoContext";
import "./Carrinho.css";

const Carrinho = () => {
  const { carrinho } = useCarrinhoContext()

  return (
    <section className="containerItemCarrinho">
      <TituloPrincipal texto="Minha sacola" />

      <div className="conteudo">
        <h3>Itens selecionados</h3>
        <div className="itens">
          {carrinho?.itens.map((itemCarrinho, index) => (
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
              <strong>{formatador.format(carrinho?.total || 0)}</strong>
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
