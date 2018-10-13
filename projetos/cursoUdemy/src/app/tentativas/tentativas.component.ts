import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  
  ngOnChanges(): void {
    console.log(this.NumeroTentativasRestantes);
  }

  public Coracoes: Coracao[] = [ new Coracao(true), new Coracao(true), new Coracao(true) ]
  
  @Input()
  public NumeroTentativasRestantes: number;

  constructor() 
  {}

  ngOnInit() {}

}
