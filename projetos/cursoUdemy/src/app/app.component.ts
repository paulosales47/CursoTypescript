import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public JogoAndamento: boolean = true;

  public EncerrarJogo(tipo: string): void{
    this.JogoAndamento = false;
  }

}
