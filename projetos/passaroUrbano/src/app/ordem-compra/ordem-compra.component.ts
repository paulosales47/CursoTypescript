import { Component, OnInit } from '@angular/core';
import {OrdemCompraService } from './../ordem-compra.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrdemCompra } from '../shared/ordem-compra.model';
import {CarrinhoCompraService} from '../carrinho-compra.service'
import {ItemCarrinhoCompra} from '../shared/item-carrinho-compra.model'

@Component({
  selector: 'aws-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public formulario: FormGroup;
  public idOrdemCompra: number;
  public itensCarrinho: Array<ItemCarrinhoCompra> = []

  constructor(
       private ordemCompraService: OrdemCompraService
      ,private carrinhoCompraService: CarrinhoCompraService) 
  {
    this.formulario = new FormGroup({
       'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)])
       ,'numero': new FormControl(null, [Validators.required, Validators.min(0), Validators.max(99999)])
       ,'complemento': new FormControl(null)
       ,'formaPagamento': new FormControl(null, [Validators.required])
    })
  }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoCompraService.ExibeItensCarrinho();
  }

  public ConfirmaCompra(): void{
    
    if(this.formulario.status === 'INVALID'){
      this.formulario.get('endereco').markAsTouched();
      this.formulario.get('numero').markAsTouched();
      this.formulario.get('formaPagamento').markAsTouched();
      console.log('formulário invalido');
    }
    else
    {
      let ordemCompra = new OrdemCompra(
         this.formulario.value.endereco
        ,this.formulario.value.numero
        ,this.formulario.value.complemento
        ,this.formulario.value.formaPagamento
        ,this.carrinhoCompraService.ExibeItensCarrinho()
      )
      
      this.ordemCompraService.EfetivarCompra(ordemCompra)
      .subscribe((idOrdemCompra: number) => this.idOrdemCompra = idOrdemCompra)
    }
  }

}
