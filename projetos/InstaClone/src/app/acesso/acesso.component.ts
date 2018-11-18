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
      transition('void => criado', [style({'opacity': 0, transform: 'translate(100px, 0px)'}) ,animate('1000ms ease-in-out', keyframes(
        [
          style({offset: 0.15, opacity: 1, transform: 'translateX(0)'}),
          style({offset: 0.25, opacity: 1, transform: 'translateY(-10px)'}),
          style({offset: 0.40, opacity: 1, transform: 'translateY(10px)'}),
          style({offset: 0.55, opacity: 1, transform: 'translateY(-10px)'}),
          style({offset: 0.70, opacity: 1, transform: 'translateY(10px)'}),
          style({offset: 0.85, opacity: 1, transform: 'translateY(-10px)'}),
          style({offset: 1, opacity: 1, transform: 'translateY(0px)'}),
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
