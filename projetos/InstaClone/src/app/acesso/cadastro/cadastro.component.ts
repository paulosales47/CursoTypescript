import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../shared/usuario.model';
import {Autenticacao} from '../../auth.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output()
  public exibirPainelLogin:EventEmitter<boolean> = new EventEmitter<boolean>()

  public formulario: FormGroup;

  constructor(private autenticacao: Autenticacao) 
  {
     this.formulario = new FormGroup({
       'email': new FormControl(null, [Validators.required]),
       'nomeCompleto': new FormControl(null, [Validators.required]),
       'nomeUsuario': new FormControl(null, [Validators.required]),
       'senha': new FormControl(null, [Validators.required])
     });
    }

  ngOnInit() {
  }
  
  public ExibirPainelLogin(): void{
    this.exibirPainelLogin.emit(true);
  }

  public CadastraUsuario(): void{
    let usuario: Usuario = new Usuario(
       this.formulario.value.email
      ,this.formulario.value.nomeCompleto
      ,this.formulario.value.nomeUsuario
      ,this.formulario.value.senha
    )
    this.autenticacao.CadastrarUsuario(usuario);
  }

}
