"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mensagem = (nome) => console.log("Bem vindo: " + nome);
mensagem("Paulo");
let texto = "Typescript 3.0.3";
let numeroDia = 26;
let estudoAngular = true;
let listaLetras = ['a', 'b', 'c', 'd', 'e'];
let listaNumeros = [1, 1.1, 2, 3, 4.5];
let listaLetras2 = ['a', 'b', 'c', 'd', 'e'];
let listaNumeros2 = [1, 1.1, 2, 3, 4.5];
const Carro_1 = require("./Carro");
const Moto_1 = __importDefault(require("./Moto"));
let carro = new Carro_1.Carro("Ford", 4);
let moto = new Moto_1.default("Honda", 0);
carro.Acelerar();
moto.Acelerar();
console.log(carro);
console.log(moto);
//AULA 29
const ConcessonariaDAO_1 = __importDefault(require("./DAO/ConcessonariaDAO"));
let DAO = new ConcessonariaDAO_1.default("TB_CARRO");
DAO.inserir(carro);
DAO.atualizar(carro);
DAO.remover(1);
