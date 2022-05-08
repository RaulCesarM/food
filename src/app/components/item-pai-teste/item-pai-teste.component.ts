import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproduto } from 'src/app/models/produto.model';

@Component({
  selector: 'ngf-item-pai-teste',
  templateUrl: './item-pai-teste.component.html',
  styleUrls: ['./item-pai-teste.component.css']
})
export class ItemPaiTesteComponent{
  quantidade = 0;

  @Input() itemADD?: Iproduto;

  @Output() adicionaAoPedido = new EventEmitter<Iproduto>();

  @Output() adicionaItensAoPedido = new EventEmitter();

  constructor() { }

  adicionarAoPedido() {
    this.adicionaAoPedido.emit(this.itemADD);

  }

  adicionarItensAoPedido() {
    const itemQuantidade = {
      item: this.itemADD,
      quantidade: this.quantidade,

    }
    console.log(itemQuantidade);

    this.adicionaItensAoPedido.emit(itemQuantidade);

  }

  incrementarQuantidade() {
    this.quantidade = this.quantidade + 1;
  }

  diminuirQuantidade() {
    this.quantidade = this.quantidade - 1;
    if (this.quantidade < 0) {
      this.quantidade = 0;
    }
  }

}
