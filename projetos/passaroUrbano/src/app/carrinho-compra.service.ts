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

    private ProcuraItemCarrinho(itemBusca: ItemCarrinhoCompra): ItemCarrinhoCompra{
        return this.itens.find((item: ItemCarrinhoCompra) =>
            item.id === itemBusca.id)        
    }

    public AdicionarItemCarrinho(itemCarrinhhoAdicionar: ItemCarrinhoCompra){

        let itemEncontrado = this.ProcuraItemCarrinho(itemCarrinhhoAdicionar);

        if(itemEncontrado)
            itemEncontrado.quantidade++;
    }

    public RemoverItemCarrinho(itemCarrinhhoRemover: ItemCarrinhoCompra){

        let itemEncontrado = this.ProcuraItemCarrinho(itemCarrinhhoRemover);

        if(itemEncontrado && itemEncontrado.quantidade > 1)
            itemEncontrado.quantidade--;
        else if(itemEncontrado)
            this.itens.splice(this.itens.indexOf(itemEncontrado), 1)
    }

    public LimparCarrinho(): void{
        this.itens = [];
    }
}

