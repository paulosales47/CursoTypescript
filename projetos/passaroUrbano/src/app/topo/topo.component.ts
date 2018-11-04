import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.services'
import { Observable } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
@Component({
  selector: 'aws-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Array<Oferta>>

  constructor(private ofertaService: OfertasService) { }

  public pesquisaOferta(termoPesquisaOferta: string): void {
    this.ofertas = this.ofertaService.PesquisaOferta(termoPesquisaOferta)

    this.ofertas.subscribe(
       (ofertas: Array<Oferta>) => console.log(ofertas)
      ,(erro: any) => console.log(erro.status)
      ,() => console.log('Fluxo de eventos completo')
    )
    
  }

  ngOnInit() {
  }

}
