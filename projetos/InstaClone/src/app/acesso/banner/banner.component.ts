import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Imagem } from '../shared/imagem.model'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({'opacity': 0})),
      state('visivel', style({'opacity': 1})),
      transition('escondido <=> visivel', animate('2s ease-in')),
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'visivel'
  public imagens: Array<Imagem>

  constructor() 
  {
    this.imagens = [
      {estado: 'escondido', url: '../../../assets/banner-acesso/img_1.png'},
      {estado: 'escondido', url: '../../../assets/banner-acesso/img_2.png'},
      {estado: 'visivel', url: '../../../assets/banner-acesso/img_3.png'},
      {estado: 'escondido', url: '../../../assets/banner-acesso/img_4.png'},
      {estado: 'escondido', url: '../../../assets/banner-acesso/img_5.png'}
    ]
   }

  ngOnInit() {
  }

  public ToggleEstado(){
    this.estado = this.estado === 'visivel' ? 'escondido' : 'visivel'
  }

}
