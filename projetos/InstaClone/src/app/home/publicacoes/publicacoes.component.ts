import { Component, OnInit } from '@angular/core';
import {BD} from '../../bd.service'
import * as firebase from 'firebase'

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {

  public publicacoes: any
  public email: string

  constructor(public bd: BD) { }

  ngOnInit() {
     firebase.auth().onAuthStateChanged((user) => {
       this.email = user.email;
      this.AtualizarTimeLine();
     });

     
  }

  public AtualizarTimeLine(): void {
    this.bd.ConsultaPublicacoes(this.email)
    .then((publicacoes: any) => this.publicacoes = publicacoes);
  }

}
