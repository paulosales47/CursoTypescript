import { Component, OnInit } from '@angular/core';
import {OrdemCompraService } from './../ordem-compra.service'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'aws-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public formulario: FormGroup;

  constructor(private ordemCompraService: OrdemCompraService) 
  {
    this.formulario = new FormGroup({
       'endereco': new FormControl(null)
       ,'numero': new FormControl(null)
       ,'complemento': new FormControl(null)
       ,'formaPagamento': new FormControl(null)
    })
  }

  ngOnInit() {}

  public ConfirmaCompra(): void{
  }

}
