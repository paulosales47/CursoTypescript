"use strict";
class Concessonaria {
    constructor(endereco, listaCarros) {
        this._endereco = endereco;
        this._listaCarros = listaCarros;
    }
    getListaCarros() {
        return this._listaCarros;
    }
}
let concessonaria = new Concessonaria("Av. Paulista", Array("A", "B", "C", "D", "E"));
console.log(typeof (concessonaria.getListaCarros()));
