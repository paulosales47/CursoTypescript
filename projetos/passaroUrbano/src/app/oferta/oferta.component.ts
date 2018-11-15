import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
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
    
    this.route.params.subscribe((parametros: Params) => {

      this.ofertaService.GetOfertaId(parametros.id)
      .then((oferta: Oferta) => this.oferta = oferta)
      .catch((resposta: any) => console.log(resposta));
      
    });


  }

}
