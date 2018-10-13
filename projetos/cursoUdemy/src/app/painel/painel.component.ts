import { Component, OnInit } from '@angular/core';
import {Frase} from '../shared/frase.model'
import {FRASES as ListaFrases} from './frases-mock'
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public Resposta: string = '';
  public FraseRodada: Frase;
  public NumeroRodada: number = 0;
  private NumeroTentativasRestantes: number = 3;
  public PorcentagemProgresso: number = 25;
  public Frases: Frase[] = ListaFrases;
  public Instrucao: string = "Traduza a frase: ";

  constructor() 
  {
    this.AtualizaFraseRodada();
  }

  ngOnInit() {}

  public AtualizaResposta(evento: Event): void
  {
    this.Resposta = (<HTMLInputElement>evento.target).value;
  }

  public VerificaResposta(): void {
    
    if(this.Resposta == this.FraseRodada.FrasePtBr)
    {
      this.NumeroRodada++;
      this.PorcentagemProgresso = this.PorcentagemProgresso + (100 / this.Frases.length);
      
      if(this.NumeroRodada < this.Frases.length-1)
        this.AtualizaFraseRodada();
      else
        alert("Você ganhou!!!");
    }
    else
    {
      alert("A trdução está incorreta");
      this.NumeroTentativasRestantes = this.NumeroTentativasRestantes -1;
    }

    this.VerificaTentativasRestantes();

  }

  private VerificaTentativasRestantes() 
  {
    if (this.NumeroTentativasRestantes == -1) 
    {
      alert("Fim de jogo");
    }
  }

  private AtualizaFraseRodada(): void
  {
    this.FraseRodada = this.Frases[this.NumeroRodada];
    this.Resposta = '';
  }
}
