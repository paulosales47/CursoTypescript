import { Component, OnInit } from '@angular/core';
import {OrdemCompraService } from './../ordem-compra.service'
import { OrdemCompra } from '../shared/ordem-compra.model';

@Component({
  selector: 'aws-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: number
  public complemento: string = ''
  public formaPagamento: string = '0'

  public enderecoValido: boolean
  public numeroValido: boolean
  public formaPagamentoValido: boolean

  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true
  
  public formValido: boolean = false;
  public ordemCompra: OrdemCompra;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    //this.ordemCompraService.EfetivarCompra(ordemCompra);
  }

  public AtualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    this.enderecoValido= this.endereco.length > 3 ? true :false
    this.enderecoEstadoPrimitivo = false;
    this.habilitaForm();
  }

  public AtualizaNumero(numero: number): void {
    this.numero = numero;
    this.numeroValido = this.numero > -1 ? true :false
    this.numeroEstadoPrimitivo = false;
    this.habilitaForm();
  }

  public AtualizaComplemento(complemento: string): void {
    this.complemento = complemento;
  }

  public AtualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoValido = (this.formaPagamento == 'debito' || this.formaPagamento == 'dinheiro') ? true : false
    this.formaPagamentoEstadoPrimitivo = false;
    this.habilitaForm();
  }

  public habilitaForm(): void {

    this.formValido =
         this.enderecoValido 
      && this.numeroValido 
      && this.formaPagamentoValido;
  }

  public ConfirmaCompra(): void {
    this.ordemCompra = new OrdemCompra(
       this.endereco
      ,this.numero
      ,this.complemento
      ,this.formaPagamento)

      this.ordemCompraService.EfetivarCompra(this.ordemCompra);
  }

}
