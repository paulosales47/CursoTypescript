import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  
  ngOnChanges(): void {
    if(this.NumeroTentativasRestantes !== this.Coracoes.length)
    {
      let indice = this.Coracoes.length - this.NumeroTentativasRestantes;
      this.Coracoes[indice - 1].Cheio = false;
    }
  }

  public Coracoes: Coracao[] = [ new Coracao(true), new Coracao(true), new Coracao(true) ]
  
  @Input()
  public NumeroTentativasRestantes: number;

  constructor() 
  {}

  ngOnInit() 
  {}

}
