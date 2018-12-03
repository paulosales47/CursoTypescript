import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Autenticacao} from '../../auth.service'
import { Usuario } from '../shared/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  public exibirPainelLogin:EventEmitter<boolean> = new EventEmitter<boolean>()

  public formulario: FormGroup;
  public erroAutenticacao: string;

  constructor(private autenticacao: Autenticacao) {
    this.formulario = new FormGroup({
       'email': new FormControl(null, [Validators.required])
      ,'senha': new FormControl(null, [Validators.required])
    })
   }

  ngOnInit() {
  }

  public ExibirPainelCadastro(): void{
    this.exibirPainelLogin.emit(false);
  }

  public Autenticar(): void {

    let usuario:Usuario = new Usuario(
       this.formulario.value.email
      ,null
      ,null
      ,this.formulario.value.senha)

    this.erroAutenticacao = this.autenticacao.Autenticar(usuario);
  }

}
