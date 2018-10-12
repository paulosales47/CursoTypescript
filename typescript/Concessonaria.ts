import taxaJurosVenda, { Carro } from "./Carro"
import IConcessonaria from "./IConcessonaria"
class Concessonaria implements IConcessonaria{

    private _endereco: string;
    private _listaCarros: Array<Carro>;

    constructor(endereco: string, listaCarros: Array<Carro>){
        this._endereco = endereco;
        this._listaCarros = listaCarros;
    }

    public ForneceListaCarro(): void{
        this._listaCarros.map((carro: Carro) =>{
            console.log(carro);
        });
    }

    get ListaCarro(): Array<Carro>
    {
        return this._listaCarros;
    }
    
}

let listaCarros = [
    new Carro("Ferrari", 2),
    new Carro("Mercedez", 4),
    new Carro("Fiat", 5)
]

let concessonaria = new Concessonaria("Av. Paulista", listaCarros);
concessonaria.ForneceListaCarro();
console.log(concessonaria.ListaCarro);
console.log(taxaJurosVenda);