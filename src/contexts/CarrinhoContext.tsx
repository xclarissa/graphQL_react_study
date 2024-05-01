import { ReactElement, createContext, useContext } from "react";
import { ICarrinho, IItemCarrinho } from "../interfaces/ICarrinho";
import { useCarrinho } from "../graphql/carrinho/hooks";

export interface ICarrinhoContext {
  carrinho?: ICarrinho;
  adicionarItemCarrinho?: (item: IItemCarrinho) => void;
}

export const CarrinhoContext = createContext({} as ICarrinhoContext);

export interface ICarrinhoProviderProps {
  children?: ReactElement;
}

const CarrinhoProvider = ({ children }: ICarrinhoProviderProps) => {
  const { data } = useCarrinho();

  const adicionarItemCarrinho = (item: IItemCarrinho) => {
    console.log('[CarrinhoProvider] - adicionarItemCarrinho', item)
  }

  return (
    <CarrinhoContext.Provider value={{ carrinho: data?.carrinho, adicionarItemCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinhoContext = () => {
    return useContext(CarrinhoContext);
}

export default CarrinhoProvider;
