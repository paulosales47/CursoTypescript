class Concessonaria{
    private _endereco: string;
    private _listaCarros: any;

    constructor(endereco: string, listaCarros: any){
        this._endereco = endereco;
        this._listaCarros = listaCarros;
    }

    public getListaCarros(): any{
        return this._listaCarros;
    }
}

let concessonaria = new Concessonaria("Av. Paulista", Array("A", "B", "C", "D", "E"));
console.log(typeof(concessonaria.getListaCarros()));