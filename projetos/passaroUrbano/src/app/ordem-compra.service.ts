import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers, Response } from '@angular/http'
import { OrdemCompra } from './shared/ordem-compra.model'
import { Observable } from 'rxjs';
import {URL_API} from './app.api'
import { map } from 'rxjs/operators';

@Injectable()
export class OrdemCompraService {

    constructor(private http: Http){}

    public EfetivarCompra(ordemCompra: OrdemCompra): Observable<number>{

        let headers: Headers = new Headers()
        headers.append('Content-type', 'application/json')

        return this.http.post(
            `${URL_API}ordem-compra`
            ,JSON.stringify(ordemCompra)
            ,new RequestOptions({headers: headers})
        )
        .pipe(
            map((resposta: Response) => resposta.json().id))
    }
}