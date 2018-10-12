export default interface IDAOGeneric<T>{

    nomeTabela: string

    inserir(object: T): boolean

    atualizar(object: T): boolean

    remover(id: number): T

    selecionar(id: number): T

    selecionarTodos(): Array<T>

}