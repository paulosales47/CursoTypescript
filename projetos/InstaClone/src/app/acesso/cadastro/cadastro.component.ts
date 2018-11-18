import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output()
  public exibirPainelLogin:EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }
  
  public ExibirPainelLogin(): void{
    this.exibirPainelLogin.emit(true);
  }

}
