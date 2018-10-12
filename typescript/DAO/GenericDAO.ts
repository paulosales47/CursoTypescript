import IDAOGeneric from "./IDAOGeneric"

export default class GenericDAO<T> implements IDAOGeneric<T>{

    nomeTabela: string;

    constructor(nomeTabela: string){
        this.nomeTabela = nomeTabela;
    }

    inserir(object: T): boolean {
        throw new Error("Method not implemented.");
    }
    atualizar(object: T): boolean {
        throw new Error("Method not implemented.");
    }
    remover(id: number): T {
        throw new Error("Method not implemented.");
    }
    selecionar(id: number): T {
        throw new Error("Method not implemented.");
    }
    selecionarTodos(): T[] {
        throw new Error("Method not implemented.");
    }


}