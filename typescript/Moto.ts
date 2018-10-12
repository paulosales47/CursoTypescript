import Veiculo from "./Veiculo"

export default class Moto extends Veiculo
{
    constructor(modelo: string, velocidadeInicial: number)
    {
        super(velocidadeInicial)
        this.modelo = modelo
    }
    
    public Acelerar(): void
    {
        this._velocidade = this._velocidade + 20;
    }
}