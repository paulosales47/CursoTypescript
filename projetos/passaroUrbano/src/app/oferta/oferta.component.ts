import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService} from '../ofertas.services'
import { Oferta } from '../shared/oferta.model';
import { Observable, interval, observable, Subject, pipe, Observer, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'aws-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.observableTeste.unsubscribe();
  }
 
  public oferta: Oferta;
  private observableTeste: Subscription;

  constructor(
     private route: ActivatedRoute
    ,private ofertaService: OfertasService
    ) {}

  ngOnInit() {
    
    this.ofertaService.GetOfertaId(this.route.snapshot.params['id'])
    .then((oferta: Oferta) => this.oferta = oferta)
    .catch((resposta: any) => console.log(resposta));

    //Observable (observável)
    let observableTeste = Observable.create((observer: Observer<string>) => {
      observer.next('Primeiro evento da stream')
      observer.complete()
    })

    //Observable (observador)
    this.observableTeste = observableTeste.subscribe(
       (resultado: string) => console.log(resultado)
      ,(erro: string) => console.log(erro)
      ,() => console.log('Evento completo')
    )
  }

}
