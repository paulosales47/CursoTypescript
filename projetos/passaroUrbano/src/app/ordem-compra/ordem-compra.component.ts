import { Component, OnInit, ViewChild } from '@angular/core';
import {OrdemCompraService } from './../ordem-compra.service'
import { OrdemCompra } from '../shared/ordem-compra.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'aws-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario') 
  public formulario: NgForm
  public idOrdemCompra: number

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {}

  public ConfirmaCompra(): void{

    let ordemCompra = new OrdemCompra(
       this.formulario.value.endereco
      ,this.formulario.value.numero
      ,this.formulario.value.complemento
      ,this.formulario.value.formaPagamento
    )

    this.ordemCompraService.EfetivarCompra(ordemCompra)
    .subscribe((idOrdemCompra: number) => this.idOrdemCompra = idOrdemCompra)
    
  }

}
