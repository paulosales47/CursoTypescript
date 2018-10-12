export class Carro {
    private modelo: string
    private numeroPortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroPortas: number){
        this.modelo = modelo;
        this.numeroPortas = numeroPortas;
    }

    public Acelerar(): void {
        this.velocidade = this.velocidade + 10;
    }

    public Parar(): void {
        this.velocidade = 0;
    }

    public VelocidadeAtual(): number {
        return this.velocidade;
    }
}

export let taxaJurosVenda: number = 6.5;