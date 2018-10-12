var mensagem = (nome: string) => console.log("Bem vindo: "+nome);
mensagem("Paulo");

let texto: string = "Typescript 3.0.3";
let numeroDia: number = 26;
let estudoAngular: boolean = true;
let listaLetras: Array<string> = ['a', 'b', 'c', 'd', 'e'];
let listaNumeros: Array<number> = [1, 1.1, 2, 3, 4.5];

let listaLetras2: string[] = ['a', 'b', 'c', 'd', 'e'];
let listaNumeros2: number[] = [1, 1.1, 2, 3, 4.5];


import {Carro} from "./Carro"
import Moto from "./Moto"

let carro = new Carro("Ford", 4);
let moto = new Moto("Honda", 100)

console.log(carro);
console.log(moto);