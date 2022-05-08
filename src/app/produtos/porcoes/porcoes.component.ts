
import { Component, OnInit } from '@angular/core';
import { Iproduto } from 'src/app/models/produto.model';
import { BuscarPorcoesService } from 'src/app/services/buscar-porcoes.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'ngf-porcoes',
  templateUrl: './porcoes.component.html',
  styleUrls: ['./porcoes.component.css']
})
export class PorcoesComponent implements OnInit {
 
  public itensFiltrados: Iproduto[] = [];
  public itens: any = [];
  private itensLista: string = '';



  constructor(
    private PorcoesServices: BuscarPorcoesService,
    private pedidoService: PedidoService

  ) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.buscarPorcoes();
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


  buscarPorcoes() {
    this.PorcoesServices
      .devolverPorcoes()
      .subscribe((resposta: Iproduto[]) => {
        this.itens = resposta;
        this.itensFiltrados = this.itens;
      });
  }



  adicionarPorcoes(itemADD: Iproduto) {
    this.pedidoService.adicionarItemPedido(itemADD);
  }

  adicionarPorcoesComQuantidade(itemComQuantidade: any) {
    this.pedidoService
      .adicionarItensPedido(itemComQuantidade.item, itemComQuantidade.quantidade);
  }

}