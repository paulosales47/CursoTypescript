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

  public ofertas: Array<Oferta>

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaService.GetOfertasCategoria('restaurante')
    .then((ofertas2: Array<Oferta>) =>
    {
      this.ofertas = ofertas2;
    })
    .catch((retorno: any) => console.log(retorno))
  }

}
