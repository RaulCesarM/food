import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { IBebida } from 'src/app/models/bebida.model';
import { IComida } from 'src/app/models/comida.model';
import { Iproduto } from 'src/app/models/produto.model';

@Component({
  selector: 'ngf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  quantidade = 0;

  @Input() item?: Iproduto;

  @Output() adicionaAoPedido = new EventEmitter<Iproduto>();

  @Output() adicionaItensAoPedido = new EventEmitter();

  constructor() { }

  adicionarAoPedido() {
    this.adicionaAoPedido.emit(this.item);
    alert(this.item)
  }

  adicionarItensAoPedido() {
    const itemQuantidade = {
      item: this.item,
      quantidade: this.quantidade
    }

    this.adicionaItensAoPedido.emit(itemQuantidade);
    alert(itemQuantidade)
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


