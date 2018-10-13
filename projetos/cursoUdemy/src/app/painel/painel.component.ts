import { Component, OnInit } from '@angular/core';
import {Frase} from '../shared/frase.model'
import {FRASES as ListaFrases} from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public Resposta: string
  public Frases: Frase[] = ListaFrases;
  public Instrucao: string = "Traduza a frase: "

  constructor() { }

  ngOnInit() {}

  public AtualizaResposta(evento: Event): void
  {
    this.Resposta = (<HTMLInputElement>evento.target).value;
    console.log(this.Resposta);
  }

}
