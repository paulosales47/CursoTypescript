import {ItemCarrinhoCompra} from './shared/item-carrinho-compra.model'

export class CarrinhoCompraService{
    public itens: Array<ItemCarrinhoCompra> = []

    public ExibeItensCarrinho(): Array<ItemCarrinhoCompra>{
        return this.itens;
    }
}

