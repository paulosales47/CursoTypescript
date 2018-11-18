import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output()
  public exibirPainelLogin:EventEmitter<boolean> = new EventEmitter<boolean>()

  public formulario: FormGroup;

  constructor() {
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
    console.log(this.formulario);
  }

}
