import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Iproduto } from 'src/app/models/produto.model';

@Component({
  selector: 'ngf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
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


