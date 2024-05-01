import { ILivro } from "./ILivro";
import { IOpcaoCompra } from "./IOpcaoCompra";

interface ICarrinho {
  total: number;
  itens: IItemCarrinho[];
}

interface IItemCarrinho {
  livro: ILivro
  opcaoCompra: IOpcaoCompra
  quantidade: number
}

export type { ICarrinho, IItemCarrinho };
