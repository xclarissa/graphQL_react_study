import { AbInputQuantidade } from "ds-alurabooks";
import IconeLixeira from "../ItemCarrinho/assets/lixeira.png";
import { IItemCarrinho } from "../../../interfaces/ICarrinho";
import { formatador } from "../../../utils/formatador-moeda";
import "./ItemCarrinho.css";

interface ItemCarrinhoProps {
  item: IItemCarrinho;
  adicionar: (item: IItemCarrinho) => void;
}

const ItemCarrinho = ({ item, adicionar }: ItemCarrinhoProps) => {
  return (
    <section className="itemContainer">
      <figure>
        <img src={item.livro.imagemCapa} alt={item.livro.descricao} height={200} />
      </figure>

      <div className="info">
        <h3>{item.livro.titulo}</h3>
        <p>{item.livro.descricao}</p>
        <p>{item.livro.autor.nome}</p>
      </div>

      <div>
        <h3>Preço</h3>
        <p>{formatador.format(item.opcaoCompra.preco)}</p>
      </div>

      <div className="quantidade">
        <AbInputQuantidade onChange={() => adicionar(item)} value={item.quantidade} />
      </div>

      <div className="icon">
        <img src={IconeLixeira} alt="Ícone lixeira" />
      </div>
    </section>
  );
};

export default ItemCarrinho;
