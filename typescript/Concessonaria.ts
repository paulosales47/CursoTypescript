import Carro from "./Carro"
class Concessonaria{
    private _endereco: string;
    private _listaCarros: Array<Carro>;

    constructor(endereco: string, listaCarros: Array<Carro>){
        this._endereco = endereco;
        this._listaCarros = listaCarros;
    }

    public getListaCarros(): void{
        this._listaCarros.map((carro: Carro) =>{
            console.log(carro);
        });
    }
}

let listaCarros = [
    new Carro("Ferrari", 2),
    new Carro("Mercedez", 4),
    new Carro("Fiat", 5)
]

let concessonaria = new Concessonaria("Av. Paulista", listaCarros);
concessonaria.getListaCarros();