import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
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
    let ofertaId = this.route.parent.snapshot.params['id'];
    this.ofertaService.GetComoUsarOfertaId(ofertaId)
    .then((resposta: string) => this.comoUsar = resposta)
    .catch((resposta: any) => console.log(resposta));
  
  }

}
