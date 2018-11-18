import {Oferta} from "./shared/oferta.model"
import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'

import {URL_API} from './app.api'
import { Observable } from "rxjs";
import { map, retry } from 'rxjs/operators';

@Injectable()
export class OfertasService{

    constructor(private http: Http)
    {}

    public GetOfertas(): Promise<Array<Oferta>>
    {
        return this.http.get(`${URL_API}ofertas`)
        .toPromise()
        .then((resposta: Response) => resposta.json())
    }

    public GetOfertasCategoria(categoria: string): Promise<Array<Oferta>>
    {
        return this.http.get(`${URL_API}ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta: Response) => resposta.json())
    }

    public GetOfertaId(id: number): Promise<Oferta>
    {
        return this.http.get(`${URL_API}ofertas?id=${id}`)
        .toPromise()
        .then((resposta: Response)=> resposta.json().shift())
    }

    public GetComoUsarOfertaId(id: number): Promise<string>
    {
        return this.http.get(`${URL_API}como-usar?id=${id}`)
        .toPromise()
        .then((resposta: Response) => resposta.json().shift().descricao)
    }

    public GetOndeFicaOfertaId(id: number): Promise<string>
    {
        return this.http.get(`${URL_API}onde-fica?id=${id}`)
        .toPromise()
        .then((resposta: Response) => resposta.json().shift().descricao)
    }

    public PesquisaOferta(termoPesquisa: string): Observable<Array<Oferta>>
    {
        return this.http.get(`${URL_API}ofertas?descricaoOferta_like=${termoPesquisa}`)
        .pipe(
             map((resposta: Response) => resposta.json())
            ,retry(10)
            )

    }
}