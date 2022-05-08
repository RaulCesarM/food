import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Iproduto } from 'src/app/models/produto.model';
import { BuscarComidasService } from 'src/app/services/buscar-comidas.service';
import { FiltrarService } from 'src/app/services/filtrar.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'ngf-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent implements OnInit {
  public itensFiltrados: Iproduto[] = [];
  public itens: any = [];
  public itensLista: string = ''; 

 


  constructor(
    private comidasService: BuscarComidasService,
    private pedidoService: PedidoService
   
  ) { }
  

  ngOnInit(): void {    
    this.buscarComida();
  
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

  buscarComida() {
    this.comidasService
      .devolverComidas()
      .subscribe((resposta: Iproduto[]) => {
        this.itens = resposta;
        this.itensFiltrados = this.itens;
      });
  }



  adicionarComida(comida: Iproduto ) {
    this.pedidoService.adicionarItemPedido(comida);
  }

  adicionarComidaComQuantidade(itemComQuantidade: any) {
    this.pedidoService.adicionarItensPedido(
      itemComQuantidade.item,
     itemComQuantidade.quantidade
     );
  }

}





