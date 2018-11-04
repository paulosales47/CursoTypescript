import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.services'
import { Observable, Subject, of } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'aws-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Array<Oferta>>
  public subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertaService: OfertasService) { }

  public pesquisaOferta(termoPesquisaOferta: string): void {
    this.subjectPesquisa.next(termoPesquisaOferta)

  }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
    .pipe(
     debounceTime(1000)
    ,switchMap((termoPesquisaOferta: string) => 
    {
      if(termoPesquisaOferta.trim() === '')
        return of<Array<Oferta>>([])
      
        return this.ofertaService.PesquisaOferta(termoPesquisaOferta);
    }));

    this.ofertas.subscribe( (ofertas: Array<Oferta>) => console.log(ofertas))
  }

}
