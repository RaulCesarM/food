import { Injectable } from '@angular/core';
import { Iproduto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  itensPedidoLista: Iproduto[]  = [];

  constructor() { }

  buscarTotalItensPedido(): number {
    return this.itensPedidoLista.length;
  }

  adicionarItemPedido(item: Iproduto) {
    this.itensPedidoLista.push(item);
  }

  adicionarItensPedido(item: Iproduto, quantidade: number) {
    const itens = Array(quantidade).fill(item);
    this.itensPedidoLista.push(...itens);

    console.log('itensPedidoLista', this.itensPedidoLista);
  }

  limparPedido() {
    this.itensPedidoLista = [];
  }

  removerItemPedido(id: number) {
    const itemIndex = this.itensPedidoLista.findIndex((item) => item.id === id)
    this.itensPedidoLista.splice(itemIndex, 1);
  }

  buscarItensPedido(): Iproduto[] {
    return this.itensPedidoLista;
  }
}