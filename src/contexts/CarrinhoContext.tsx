import { ReactElement, createContext, useContext } from "react";
import { ICarrinho } from "../interfaces/ICarrinho";

export interface ICarrinhoContext {
  carrinho?: ICarrinho;
}

export const CarrinhoContext = createContext({} as ICarrinhoContext);

export interface ICarrinhoProviderProps {
  children?: ReactElement;
}

const CarrinhoProvider = ({ children }: ICarrinhoProviderProps) => {
  const carrinho: ICarrinho = {
    itens: [],
    total: 0,
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinhoContext = () => {
    return useContext(CarrinhoContext);
}

export default CarrinhoProvider;
