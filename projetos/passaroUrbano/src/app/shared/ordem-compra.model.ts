import { ItemCarrinhoCompra } from "./item-carrinho-compra.model";

export class OrdemCompra {

    constructor(
         public Endereco: string
        ,public Numero: number
        ,public Complemento: string
        ,public FormaPagamento: string
        ,public ItensCarrinhoCompra: Array<ItemCarrinhoCompra>
        ){}
}