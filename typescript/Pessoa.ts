import { Carro } from "./Carro";

export class Pessoa{

    private _nome: string;
    private _carro: Carro;

    constructor(nome: string, carro: Carro){
        this._nome = nome;
        this._carro = carro;
    }

    get Nome(): string
    {
        return this._nome;
    }

    set Nome(nome: string)
    {
        this._nome = nome;
    }

    get Carro(): Carro
    {
        return this._carro;
    }
}

let pessoa = new Pessoa("Paulo", new Carro("AMG", 5));
console.log(pessoa.Carro);
pessoa.Nome = "Paulo Henrique";
console.log(pessoa.Nome);