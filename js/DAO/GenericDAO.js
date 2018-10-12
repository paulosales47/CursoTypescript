"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenericDAO {
    constructor(nomeTabela) {
        this.nomeTabela = nomeTabela;
    }
    inserir(object) {
        throw new Error("Method not implemented.");
    }
    atualizar(object) {
        throw new Error("Method not implemented.");
    }
    remover(id) {
        throw new Error("Method not implemented.");
    }
    selecionar(id) {
        throw new Error("Method not implemented.");
    }
    selecionarTodos() {
        throw new Error("Method not implemented.");
    }
}
exports.default = GenericDAO;
