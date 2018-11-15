import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import {OfertasService} from '../../ofertas.services'

@Component({
  selector: 'aws-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]

})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string

  constructor(
     private route: ActivatedRoute
    ,private ofertaService: OfertasService
    ) { }

  ngOnInit() {

    this.route.parent.params.subscribe((parametros: Params) => {

      this.ofertaService.GetOndeFicaOfertaId(parametros.id)
      .then((resposta: string) => this.ondeFica = resposta)
      .catch((resposta: any) => console.log(resposta));

    });

    

  }

}
