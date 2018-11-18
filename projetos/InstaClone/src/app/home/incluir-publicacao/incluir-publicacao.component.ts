import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {BD} from '../../bd.service'
@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public formulario: FormGroup;

  constructor(private bd: BD) {

    this.formulario = new FormGroup({
      'titulo': new FormControl(null)
    });

   }

  ngOnInit() {
  }

  public Publicar():void{
    this.bd.SalvarNovaPublicacao();
  }

}
