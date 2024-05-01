import { AbInputQuantidade } from "ds-alurabooks";
import IconeLixeira from "../ItemCarrinho/assets/lixeira.png";
import { IItemCarrinho } from "../../../interfaces/ICarrinho";
import { formatador } from "../../../utils/formatador-moeda";
import { useCarrinhoContext } from "../../../contexts/CarrinhoContext";
import "./ItemCarrinho.css";

interface ItemCarrinhoProps {
  item: IItemCarrinho;
}

const ItemCarrinho = ({ item }: ItemCarrinhoProps) => {
  const { adicionarItemCarrinho, removerItemCarrinho } = useCarrinhoContext();

  const handleAdicionarAoCarrinho = (quantidade: number) => {
    if (!item?.livro) return;

    if(quantidade === 0) return handleRemoverItem();

    adicionarItemCarrinho({
      livro: item.livro,
      opcaoCompra: item.opcaoCompra,
      quantidade: quantidade,
    });
    
  };

  const handleRemoverItem = () => {
    if (!item.livro) return;
    if (!item.opcaoCompra) return;
    if (!item.quantidade) return;
    
    removerItemCarrinho({
      livro: item.livro,
      opcaoCompra: item.opcaoCompra,
      quantidade: item.quantidade,
    });
  };


  return (
    <section className="itemContainer">
      <figure>
        <img
          src={item.livro.imagemCapa}
          alt={item.livro.descricao}
          height={200}
        />
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
        <AbInputQuantidade
          onChange={handleAdicionarAoCarrinho}
          value={item.quantidade}
        />
      </div>

      <div className="icon">
        <img src={IconeLixeira} alt="Ícone lixeira" onClick={handleRemoverItem} />
      </div>
    </section>
  );
};

export default ItemCarrinho;
