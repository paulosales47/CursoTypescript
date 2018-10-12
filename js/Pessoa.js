"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = require("./Carro");
class Pessoa {
    constructor(nome, carro) {
        this._nome = nome;
        this._carro = carro;
    }
    get Nome() {
        return this._nome;
    }
    set Nome(nome) {
        this._nome = nome;
    }
    get Carro() {
        return this._carro;
    }
}
exports.Pessoa = Pessoa;
let pessoa = new Pessoa("Paulo", new Carro_1.Carro("AMG", 5));
console.log(pessoa.Carro);
pessoa.Nome = "Paulo Henrique";
console.log(pessoa.Nome);
