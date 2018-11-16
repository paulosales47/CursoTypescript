import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { OrdemCompra } from './shared/ordem-compra.model'

@Injectable()
export class OrdemCompraService {

    constructor(private http: Http){}

    public EfetivarCompra(ordemCompra: OrdemCompra){
        console.log(ordemCompra);
    }
}