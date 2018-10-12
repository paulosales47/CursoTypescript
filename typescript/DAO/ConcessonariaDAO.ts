import IDAO from "./IDAO"

export default class ConcessonariaDAO implements IDAO{

    nomeTabela: string;
        
    constructor(tabela: string)
    {
        this.nomeTabela = tabela;
    }

    inserir(object: any): boolean {
        console.log('INSERIR');
        return true;
    }
    atualizar(object: any): boolean {
        console.log('ATUALIZAR');
        return true;
    }
    remover(id: number) {
        console.log('REMOVER');
    }
    selecionar(id: number) {
        console.log('SELECIONAR');
    }
    selecionarTodos(): any[] {
        console.log('SELECIONAR TODOS');
        return ['A', 'B', 'C', 'D', 'E'];
    }


}