"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Veiculo_1 = __importDefault(require("./Veiculo"));
class Carro extends Veiculo_1.default {
    constructor(modelo, numeroPortas) {
        super(0);
        this.modelo = modelo;
        this.numeroPortas = numeroPortas;
    }
}
exports.Carro = Carro;
let taxaJurosVenda = 6.5;
exports.default = taxaJurosVenda;
