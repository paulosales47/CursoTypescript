import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.services'
@Component({
  selector: 'aws-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  constructor(private ofertaService: OfertasService) { }

  public pesquisaOferta(termoPesquisaOferta: string): void {
    console.log(termoPesquisaOferta);
    
  }

  ngOnInit() {
  }

}
