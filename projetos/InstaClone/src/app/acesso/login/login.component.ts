import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  public exibirPainelLogin:EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  public ExibirPainelCadastro(): void{
    this.exibirPainelLogin.emit(false);
  }

}
