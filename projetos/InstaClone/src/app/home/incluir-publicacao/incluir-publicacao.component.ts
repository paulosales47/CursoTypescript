import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {BD} from '../../bd.service'
import * as firebase from 'firebase'
@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public formulario: FormGroup;
  public email: string

  constructor(private bd: BD) {

    this.formulario = new FormGroup({
      'titulo': new FormControl(null)
    });

   }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) =>{
      this.email = user.email;
    })
  }

  public Publicar():void{

    this.bd.SalvarNovaPublicacao({
       email: this.email
      ,titulo: this.formulario.value.titulo
    });
  }

  public PreparaIamgemUpload(event: Event): void{
    console.log((<HTMLInputElement>event.target).files)
  }

}
