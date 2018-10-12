"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConcessonariaDAO {
    constructor(tabela) {
        this.nomeTabela = tabela;
    }
    inserir(object) {
        console.log('INSERIR');
        return true;
    }
    atualizar(object) {
        console.log('ATUALIZAR');
        return true;
    }
    remover(id) {
        console.log('REMOVER');
    }
    selecionar(id) {
        console.log('SELECIONAR');
    }
    selecionarTodos() {
        console.log('SELECIONAR TODOS');
        return ['A', 'B', 'C', 'D', 'E'];
    }
}
exports.default = ConcessonariaDAO;
