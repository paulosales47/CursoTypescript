import { Component, OnInit } from '@angular/core';
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


  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {}

  public ConfirmaCompra(formulario: NgForm): void{
    console.log(formulario.value);
  }

}
