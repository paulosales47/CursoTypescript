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

    let regEmail: RegExp = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    let regSenha: RegExp = /^(?=.*\d{1})(?=.*[A-Z]{1})(?=.*[\D,\W,\S]{1})(?=.*[a-z]).{10,16}$/

    this.formulario = new FormGroup({
       'email': new FormControl(null, [Validators.required, Validators.pattern(regEmail)])
      ,'senha': new FormControl(null, [Validators.required, Validators.pattern(regSenha)])
    })
   }

  ngOnInit() {
  }

  public ExibirPainelCadastro(): void{
    this.exibirPainelLogin.emit(false);
  }

  public Autenticar(): void {

    if(this.formulario.valid){
      let usuario:Usuario = new Usuario(
        this.formulario.value.email
       ,null
       ,null
       ,this.formulario.value.senha)
 
     this.erroAutenticacao = this.autenticacao.Autenticar(usuario);
    }
    else{
      this.formulario.get('email').markAsTouched();
      this.formulario.get('senha').markAsTouched();
    }


  }

}
