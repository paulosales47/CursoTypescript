import {ItemCarrinhoCompra} from './shared/item-carrinho-compra.model'
import { Oferta } from './shared/oferta.model';

export class CarrinhoCompraService{
    public itens: Array<ItemCarrinhoCompra> = []

    public ExibeItensCarrinho(): Array<ItemCarrinhoCompra>{
        return this.itens;
    }

    public IncluirItem(oferta: Oferta): void{
        let itemCarrinho: ItemCarrinhoCompra = new ItemCarrinhoCompra(
             oferta.id
            ,oferta.imagens[0]
            ,oferta.titulo
            ,oferta.descricaoOferta
            ,oferta.valor
            ,1
        )

        this.itens.push(itemCarrinho);
    }
}

