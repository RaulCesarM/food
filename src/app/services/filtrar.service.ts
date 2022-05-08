import { Injectable } from '@angular/core';
import { Iproduto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class FiltrarService {

  constructor() { }
  
  FiltradosService: any = [];//ok
  itensService: any = [];
  itensListaService: string = '';


  FiltroListaService(value: string) {
    this.itensListaService = value;
    this.FiltradosService = this.itensListaService  ?
      this.filtrarItens(this.itensListaService) :
      this.itensService;
  }

  filtrarItens(FiltrarPor: string): any {
    FiltrarPor = FiltrarPor.toLocaleLowerCase();
    return this.itensService.filter((itens:
      { nome: string }) =>

      itens.nome.toLocaleLowerCase().indexOf(FiltrarPor) !== -1

    );
  }

}
