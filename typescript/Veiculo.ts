export default class Veiculo {
    protected modelo: string = '';
    protected _velocidade: number = 0;

    constructor(velocidadeInicial: number)
    {
        this._velocidade = velocidadeInicial;
    }

    public Acelerar(): void {
        this._velocidade = this._velocidade + 10;
    }

    public Parar(): void {
        this._velocidade = 0;
    }

    public VelocidadeAtual(): number {
        return this._velocidade;
    }
}