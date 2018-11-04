import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService} from '../ofertas.services'
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'aws-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {
 
  public oferta: Oferta;

  constructor(
     private route: ActivatedRoute
    ,private ofertaService: OfertasService
    ) {}

  ngOnInit() {
    let idOferta = this.route.snapshot.params['id'];

    this.ofertaService.GetOfertaId(idOferta)
    .then((oferta: Oferta) => this.oferta = oferta)
    .catch((resposta: any) => console.log(resposta));
  }

}
