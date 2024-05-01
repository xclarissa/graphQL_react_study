import { ILivro } from "./ILivro";
import { IOpcaoCompra } from "./IOpcaoCompra";

interface ICarrinho {
  total: number;
  itens: IItemCarrinho[];
}

interface IItemCarrinho {
  quantidade: number;
  livroId?: number;
  opcaoCompraId?: number;
  opcaoCompra: IOpcaoCompra;
  livro: ILivro;
}

export type { ICarrinho, IItemCarrinho };
