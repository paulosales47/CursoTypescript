import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Frase} from '../shared/frase.model'
import {FRASES as ListaFrases} from './frases-mock'
import { runInThisContext } from 'vm';

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
  public PorcentagemProgresso: number = 0;
  public Frases: Frase[] = ListaFrases;
  public Instrucao: string = "Traduza a frase: ";
  
  @Output()
  public EncerraJogo: EventEmitter<string>

  constructor() 
  {
    this.AtualizaFraseRodada();
    this.EncerraJogo = new EventEmitter();
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
      if(this.PorcentagemProgresso < 100)
        this.PorcentagemProgresso = this.PorcentagemProgresso + 25;
      
      this.VerificaVitoria();
    }
    else
    {
      alert("A trdução está incorreta");
      this.NumeroTentativasRestantes = this.NumeroTentativasRestantes -1;
    }

    this.VerificaTentativasRestantes();
  }

  private VerificaVitoria() 
  {
    if (this.NumeroRodada < 4)
      this.AtualizaFraseRodada();
    else
    {
      alert("Você ganhou!!!");
      this.EncerraJogo.emit("Vitoria");
    }
  }

  private VerificaTentativasRestantes() 
  {
    if (this.NumeroTentativasRestantes == -1)
    {
      alert("Fim de jogo");
      this.EncerraJogo.emit("Derrota");
    }
  }

  private AtualizaFraseRodada(): void
  {
    this.FraseRodada = this.Frases[this.NumeroRodada];
    this.Resposta = '';
  }
}
