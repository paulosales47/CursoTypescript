import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService} from '../ofertas.service'
import { Oferta } from '../shared/oferta.model';
import { CarrinhoCompraService} from '../carrinho-compra.service'

@Component({
  selector: 'aws-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService, CarrinhoCompraService]
})
export class OfertaComponent implements OnInit {
  public oferta: Oferta;
  
  constructor(
     private route: ActivatedRoute
    ,private ofertaService: OfertasService
    ,private carrinhoCompraService: CarrinhoCompraService
    ) {}

  ngOnInit() {
    
    console.log(this.carrinhoCompraService.ExibeItensCarrinho())

    this.route.params.subscribe((parametros: Params) => {

      this.ofertaService.GetOfertaId(parametros.id)
      .then((oferta: Oferta) => this.oferta = oferta)
      .catch((resposta: any) => console.log(resposta));
      
    });


  }

}
