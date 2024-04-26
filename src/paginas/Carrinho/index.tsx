import { useCarrinho } from "../../graphql/carrinho/hooks";
import ItemCarrinho from "./ItemCarrinho";

const Carrinho = () => {
  const { data } = useCarrinho();

  return(
    <section>
      {data?.carrinho.itens.map((itemCarrinho, index) => (
        <ItemCarrinho key={index} item={itemCarrinho} />
      ))}
    </section>
  )
};

export default Carrinho;
