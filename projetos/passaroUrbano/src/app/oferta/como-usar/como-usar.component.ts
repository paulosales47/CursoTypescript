import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import {OfertasService} from '../../ofertas.services'

@Component({
  selector: 'aws-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]

})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string

  constructor(
     private route: ActivatedRoute
    ,private ofertaService: OfertasService
    ) { }

  ngOnInit() {

    this.route.parent.params.subscribe((parametros: Params) => {

      this.ofertaService.GetComoUsarOfertaId(parametros.id)
      .then((resposta: string) => this.comoUsar = resposta)
      .catch((resposta: any) => console.log(resposta));      

    });
  }

}
