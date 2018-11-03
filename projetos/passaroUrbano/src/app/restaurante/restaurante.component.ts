import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.services'
import { Oferta } from '../shared/oferta.model';
@Component({
  selector: 'aws-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css'],
  providers: [OfertasService]
  
})
export class RestauranteComponent implements OnInit {

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaService.GetOfertasCategoria('restaurante')
    .then((ofertas: Array<Oferta>) => console.log(ofertas))
  }

}
