import {Oferta} from "./shared/oferta.model"
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {URL_API} from './app.api'

@Injectable()
export class OfertasService{

    constructor(private http: Http)
    {}

    public GetOfertas(): Promise<Array<Oferta>>
    {
        return this.http.get(URL_API)
        .toPromise()
        .then((resposta: any) => resposta.json())
    }

    public GetOfertasCategoria(categoria: string): Promise<Array<Oferta>>
    {
        return this.http.get(`${URL_API}?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta.json())
    }

    public GetOfertaId(id: number): Promise<Oferta>
    {
        return this.http.get(`${URL_API}?id=${id}`)
        .toPromise()
        .then((resposta: any)=> resposta.json().shift())
    }
}