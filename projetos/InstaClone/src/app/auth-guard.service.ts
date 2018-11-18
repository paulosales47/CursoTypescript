import { Injectable} from '@angular/core'
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import {Autenticacao} from './auth.service'

@Injectable()
export class AutenticacaoGuard implements CanActivate{

    constructor(private autenticacao: Autenticacao){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        return this.autenticacao.UsuarioAutenticado();
    }
}