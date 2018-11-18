import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', 
    [
      state('criado', style({'opacity': 1})),
      transition('void => criado', [style({'opacity': 0, transform: 'translate(-100px, 0px)'}) ,animate('500ms ease-in-out')])
    ]),
    trigger('animacao-painel', 
    [
      state('criado', style({'opacity': 1})),
      transition('void => criado', [style({'opacity': 0, transform: 'translate(0px, 0px)'}) ,animate('1000ms ease-in-out', keyframes(
        [
          style({offset: 0.30, opacity: 0.3, transform: 'scale(0.3)'}),
          style({offset: 0.45, opacity: 0.45, transform: 'scale(0.45)'}),
          style({offset: 0.75, opacity: 0.75, transform: 'scale(0.75)'}),
          style({offset: 0.99, opacity: 1, transform: 'scale(1)'}),
        ]
      ))])
    ])

]
})
export class AcessoComponent implements OnInit {

  public estadoBanner:string = 'criado';
  public estadoPainel:string = 'criado';
  public exibePainelLogin: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public ExibirPainel(exibePainelLogin: boolean): void{
    this.exibePainelLogin = exibePainelLogin;
  }

}
