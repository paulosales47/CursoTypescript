"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carro {
    constructor(modelo, numeroPortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroPortas = numeroPortas;
    }
    Acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    Parar() {
        this.velocidade = 0;
    }
    VelocidadeAtual() {
        return this.velocidade;
    }
}
exports.default = Carro;
let carro = new Carro("ABC", 5);
console.log(carro);
