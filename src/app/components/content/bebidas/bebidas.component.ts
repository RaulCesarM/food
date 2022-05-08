
import { Component, OnInit } from '@angular/core';
import { Iproduto } from 'src/app/models/produto.model';
import { BuscarBebidasService } from 'src/app/services/buscar-bebidas.service';
import { FiltrarService } from 'src/app/services/filtrar.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'ngf-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  public itensFiltrados: any = [];
  public itens: any = [];
  private itensLista: string = '';
  listaBebida: Iproduto[] = [];


  constructor(
    private bebidaService: BuscarBebidasService,
    private pedidoService: PedidoService
  
  ) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.buscarBebidas();
  }


  public get FiltroLista(): string {
    return this.itensLista;
  }

  public set FiltroLista(value: string) {
    this.itensLista = value;
    this.itensFiltrados = this.FiltroLista ?
      this.filtrarItens(this.FiltroLista) :
      this.itens;
  }

  filtrarItens(FiltrarPor: string): any {
    FiltrarPor = FiltrarPor.toLocaleLowerCase();
    return this.itens.filter((itens: { nome: string }) =>
      itens.nome.toLocaleLowerCase().indexOf(FiltrarPor) !== -1
    );
  }


  buscarBebidas() {
    this.bebidaService
      .devolverBebidas()
      .subscribe((resposta: Iproduto[]) => {
        this.itens = resposta;
        this.listaBebida =resposta;
        this.itensFiltrados = this.itens;
      });
  }

  adicionarBebidas(bebida: Iproduto) {
    this.pedidoService.adicionarItemPedido(bebida);
  }

  adicionarBebidasComQuantidade(itemComQuantidade: any) {
    this.pedidoService
      .adicionarItensPedido(itemComQuantidade.item, itemComQuantidade.quantidade);
  }

}