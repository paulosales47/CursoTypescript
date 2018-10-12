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
exports.Carro = Carro;
exports.taxaJurosVenda = 6.5;
