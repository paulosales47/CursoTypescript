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
    
    this.ofertaService.GetOfertaId(this.route.snapshot.params['id'])
    .then((oferta: Oferta) => this.oferta = oferta)
    .catch((resposta: any) => console.log(resposta));

    this.route.params.subscribe(
       (parametro: any) => console.log(parametro)
      ,(erro: any) => console.log(erro)
      ,() => console.log('Processamento concluído')
    )

  }

}
