import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  public exibirPainelLogin:EventEmitter<boolean> = new EventEmitter<boolean>()

  public formulario: FormGroup;

  constructor() {
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

  public Autenticar(): void{
    
  }

}
