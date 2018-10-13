import { Component, OnInit, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public Coracoes: Coracao[] = [ new Coracao(true), new Coracao(true), new Coracao(true) ]
  
  @Input()
  public NumeroTentativasRestantes: number;

  constructor() 
  {
    console.log(this.NumeroTentativasRestantes)
  }

  ngOnInit() {
    console.log(this.NumeroTentativasRestantes)
  }

}
