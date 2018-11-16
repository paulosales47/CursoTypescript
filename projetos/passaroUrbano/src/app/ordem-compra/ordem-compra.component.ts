import { Component, OnInit } from '@angular/core';
import {OrdemCompraService } from './../ordem-compra.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
       'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)])
       ,'numero': new FormControl(null, [Validators.required, Validators.min(0), Validators.max(99999)])
       ,'complemento': new FormControl(null)
       ,'formaPagamento': new FormControl(null, [Validators.required])
    })
  }

  ngOnInit() {}

  public ConfirmaCompra(): void{
    console.log(this.formulario);
  }

}
