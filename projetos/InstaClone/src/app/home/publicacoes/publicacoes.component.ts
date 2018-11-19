import { Component, OnInit } from '@angular/core';
import {BD} from '../../bd.service'
import * as firebase from 'firebase'

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {

  constructor(public bd: BD) { }

  ngOnInit() {
     firebase.auth().onAuthStateChanged((user) => {
      this.AtualizarTimeLine(user.email);
     });

     
  }

  public AtualizarTimeLine(email: string): void {
    this.bd.ConsultaPublicacoes(email);
  }

}
