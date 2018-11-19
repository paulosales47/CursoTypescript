import { Component, OnInit, ViewChild } from '@angular/core';
import {Autenticacao} from '../auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('publicacoes') public publicacoes: any

  constructor(private autenticacao: Autenticacao) { }

  ngOnInit() {
  }

  public Sair():void{
    this.autenticacao.Sair();
  }

  public AtualizarTimeLine(): void{
    this.publicacoes.AtualizarTimeLine();
  }
}
