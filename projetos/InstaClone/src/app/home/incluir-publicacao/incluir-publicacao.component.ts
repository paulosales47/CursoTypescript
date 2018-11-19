import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {BD} from '../../bd.service'
import * as firebase from 'firebase'
import {ProgressoUpload} from '../../progresso-upload.service'
import { Observable, interval, observable, Subject, pipe } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public formulario: FormGroup;
  public email: string
  public imagem: any

  constructor(private bd: BD, private progressoUpload: ProgressoUpload) {

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
      ,imagem: this.imagem
    });

    
    let continuaSubscribe = new Subject();
    let acompanhaProgressoUpload = interval(1500).pipe(takeUntil(continuaSubscribe));
    

    acompanhaProgressoUpload
    .subscribe(() => {
      console.log(this.progressoUpload.estado);
      console.log(this.progressoUpload.status);

      if(this.progressoUpload.status === 'concluido')
        continuaSubscribe.next(false);
    })

    
  }

  public PreparaIamgemUpload(event: Event): void{
     this.imagem = (<HTMLInputElement>event.target).files[0]
  }

}
