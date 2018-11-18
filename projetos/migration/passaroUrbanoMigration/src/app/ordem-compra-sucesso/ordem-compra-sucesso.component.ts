import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aws-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css']
})
export class OrdemCompraSucessoComponent implements OnInit {


  @Input() public idOrdemCompra: number 
  constructor() { }

  ngOnInit() {
  }

}
