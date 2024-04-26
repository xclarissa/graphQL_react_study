import { ILivro } from "./ILivro"
import { IOpcaoCompra } from "./IOpcaoCompra"

export interface ICarrinho {
  total: number
  itens: IItemCarrinho[]
}

export interface IItemCarrinho {
  quantidade: number
  livroId: number
  opcaoCompraId: number
  opcaoCompra: IOpcaoCompra
  livro: ILivro
}