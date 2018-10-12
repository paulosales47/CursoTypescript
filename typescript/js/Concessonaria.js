"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
class Concessonaria {
    constructor(endereco, listaCarros) {
        this._endereco = endereco;
        this._listaCarros = listaCarros;
    }
    getListaCarros() {
        this._listaCarros.map((carro) => {
            console.log(carro);
        });
    }
}
let listaCarros = [
    new Carro_1.default("Ferrari", 2),
    new Carro_1.default("Mercedez", 4),
    new Carro_1.default("Fiat", 5)
];
let concessonaria = new Concessonaria("Av. Paulista", listaCarros);
concessonaria.getListaCarros();
