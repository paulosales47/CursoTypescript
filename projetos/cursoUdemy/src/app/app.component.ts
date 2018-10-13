import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public JogoAndamento: boolean = true;
  public TipoEncerramento: string;

  public EncerrarJogo(tipo: string): void{
    this.JogoAndamento = false;
    this.TipoEncerramento = tipo;
  }

  public ReiniciarJogo(): void 
  {
    this.JogoAndamento = true;
    this.TipoEncerramento = undefined;
  }

}
