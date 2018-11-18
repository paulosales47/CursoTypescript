import {Routes, Route} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {RestauranteComponent} from './restaurante/restaurante.component'
import {DiversaoComponent} from './diversao/diversao.component'
import { OfertaComponent } from './oferta/oferta.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';

export const ROUTES: Routes = 
[
     {path:'', component: HomeComponent}
    ,{path:'restaurante', component: RestauranteComponent}
    ,{path:'diversao', component: DiversaoComponent}
    ,{path:'oferta', component: HomeComponent}
    ,{path:'ordem-compra', component: OrdemCompraComponent}
    ,{path:'oferta/:id', component: OfertaComponent, 
        children: 
        [   
             {path:'', component: OndeFicaComponent}
            ,{path:'onde-fica', component: OndeFicaComponent}
            ,{path:'como-usar', component: ComoUsarComponent}
        ]}
]