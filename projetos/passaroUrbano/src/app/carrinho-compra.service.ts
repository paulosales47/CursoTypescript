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
        
        let itemCarrinhoExistente = this.itens.find((item: ItemCarrinhoCompra) => item.id === itemCarrinho.id)
        
        if(itemCarrinhoExistente) 
            itemCarrinhoExistente.quantidade += 1;
        else
            this.itens.push(itemCarrinho);
    }

    public CalculaTotalPrecoCarrinho(): number{
        let total: number = 0;

        this.itens.map((item: ItemCarrinhoCompra) => {
            total += (item.valor * item.quantidade);
        })

        return total;
    }

    public AdicionarItemCarrinho(itemCarrinhhoAdicionar: ItemCarrinhoCompra){
        let itemEncontrado = this.itens.find((item: ItemCarrinhoCompra) =>
            item.id === itemCarrinhhoAdicionar.id)

        if(itemEncontrado)
            itemEncontrado.quantidade++;
    }
}

