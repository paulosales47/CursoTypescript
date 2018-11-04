import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
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
    let ofertaId = this.route.parent.snapshot.params['id']
    this.ofertaService.GetOndeFicaOfertaId(ofertaId)
    .then((resposta: string) => this.ondeFica = resposta)
    .catch((resposta: any) => console.log(resposta));
  }

}
