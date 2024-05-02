import { ReactElement, createContext, useContext } from "react";
import { ICarrinho, IItemCarrinho } from "../interfaces/ICarrinho";
import {
  useAdicionarItem,
  useCarrinho,
  useRemoverItem,
} from "../graphql/carrinho/hooks";

export interface ICarrinhoContext {
  carrinho?: ICarrinho;
  adicionarItemCarrinho: (item: IItemCarrinho) => void;
  removerItemCarrinho: (item: IItemCarrinho) => void;
  carregando: boolean;
}

export const CarrinhoContext = createContext({} as ICarrinhoContext);

export interface ICarrinhoProviderProps {
  children?: ReactElement;
}

const CarrinhoProvider = ({ children }: ICarrinhoProviderProps) => {
  const { data, loading: loadingCarrinho } = useCarrinho();
  const [adicionarItem, { loading: loadingAdicionar }] = useAdicionarItem();

  const [removerItem] = useRemoverItem();

  const adicionarItemCarrinho = (item: IItemCarrinho) => {
    adicionarItem({
      variables: {
        item: {
          livroId: item.livro.id,
          opcaoCompraId: item.opcaoCompra?.id,
          quantidade: item.quantidade,
        },
      },
    });
  };

  const removerItemCarrinho = (item: IItemCarrinho) => {
    removerItem({
      variables: {
        item: {
          livroId: item.livro.id,
          opcaoCompraId: item.opcaoCompra?.id,
          quantidade: item.quantidade,
        },
      },
    });
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho: data?.carrinho,
        adicionarItemCarrinho,
        removerItemCarrinho,
        carregando: loadingCarrinho || loadingAdicionar,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinhoContext = () => {
  return useContext(CarrinhoContext);
};

export default CarrinhoProvider;
