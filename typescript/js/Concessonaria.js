"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importStar(require("./Carro"));
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
    get ListaCarro() {
        return this._listaCarros;
    }
}
let listaCarros = [
    new Carro_1.Carro("Ferrari", 2),
    new Carro_1.Carro("Mercedez", 4),
    new Carro_1.Carro("Fiat", 5)
];
let concessonaria = new Concessonaria("Av. Paulista", listaCarros);
concessonaria.getListaCarros();
console.log(concessonaria.ListaCarro);
console.log(Carro_1.default);
