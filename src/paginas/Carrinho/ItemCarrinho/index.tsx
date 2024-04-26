import { IItemCarrinho } from "../../../interfaces/ICarrinho";

interface ItemCarrinhoProps {
  item: IItemCarrinho;
}

const ItemCarrinho = ({ item }: ItemCarrinhoProps) => {
  return <section>{item.livro.titulo}</section>;
};

export default ItemCarrinho;
