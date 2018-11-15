import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aws-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: number
  public complemento: string = ''
  public formaPagamento: string = '0'

  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean

  constructor() { }

  ngOnInit() {
  }

  public AtualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    this.enderecoValido= this.endereco.length > 3 ? true :false
  }

  public AtualizaNumero(numero: number): void {
    this.numero = numero
    this.numeroValido = this.numero > -1 ? true :false
  }

  public AtualizaComplemento(complemento: string): void {}

  public AtualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoValido = (this.formaPagamento == 'debito' || this.formaPagamento == 'dinheiro') ? true : false
  }

}
