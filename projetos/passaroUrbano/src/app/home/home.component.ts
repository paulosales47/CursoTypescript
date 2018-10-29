import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.services';

@Component({
  selector: 'aws-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  constructor(private oferta: OfertasService) { }

  ngOnInit() {
    console.log(this.oferta.GetOfertas())
  }

}
