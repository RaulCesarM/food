import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';


@Component({
  selector: 'ngf-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  qtdeItemPedido = 10;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
  }

  buscaTotalItem() {
    return this.pedidoService.buscarTotalItensPedido();
  }

}
