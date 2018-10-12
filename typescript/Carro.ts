import Veiculo from "./Veiculo";

export class Carro extends Veiculo{
    private numeroPortas: number
    
    constructor(modelo: string, numeroPortas: number){
        super(0);
        this.modelo = modelo;
        this.numeroPortas = numeroPortas;
    }
}

let taxaJurosVenda: number = 6.5;
export default taxaJurosVenda;