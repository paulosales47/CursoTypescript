import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [trigger('animacao-banner', [
    state('criado', style({'opacity': 1})),
    transition('void => criado', [
      style({'opacity': 0, transform: 'translate(-100px, 0px)'})
      ,animate('500ms ease-in-out')
    ])
  ]
  )]
})
export class AcessoComponent implements OnInit {

  public estadoBanner:string = 'criado';

  constructor() { }

  ngOnInit() {
  }

}
