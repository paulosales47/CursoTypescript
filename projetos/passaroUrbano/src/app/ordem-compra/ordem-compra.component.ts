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


  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {}
}
