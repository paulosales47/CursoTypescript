import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.services'
import {Oferta} from '../shared/oferta.model'

@Component({
  selector: 'aws-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Array<Oferta>

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaService.GetOfertasCategoria('diversao')
    .then((ofertas: Array<Oferta>) =>
    {
       this.ofertas = ofertas;
    })
    .catch((retorno: any) => console.log(retorno))
  }

}
