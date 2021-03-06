import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'aws-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaService.GetOfertas()
    .then((ofertas: Array<Oferta>) => 
    {
      this.ofertas = ofertas;
    })
    .catch((retorno: any) => console.log(retorno))

  }

}
