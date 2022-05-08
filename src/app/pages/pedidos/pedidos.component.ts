import { Component, OnInit } from '@angular/core';

import { Iproduto } from 'src/app/models/produto.model';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'ngf-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  listaItensPedido: Iproduto[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.buscarItensPedido();
  }

  buscarItensPedido() {
    this.listaItensPedido = this.pedidoService.buscarItensPedido();
  }

  removerItem(item: Iproduto) {
    this.pedidoService.removerItemPedido(item.id);
    this.buscarItensPedido();
  }

  removerTudo() {
    this.pedidoService.limparPedido();
    this.buscarItensPedido();
  }

}
