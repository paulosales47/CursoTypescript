"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    constructor(velocidadeInicial) {
        this.modelo = '';
        this._velocidade = 0;
        this._velocidade = velocidadeInicial;
    }
    Acelerar() {
        this._velocidade = this._velocidade + 10;
    }
    Parar() {
        this._velocidade = 0;
    }
    VelocidadeAtual() {
        return this._velocidade;
    }
}
exports.default = Veiculo;
