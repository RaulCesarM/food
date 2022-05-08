import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_API_PORCOES } from '../Constants/Constantes';
import { Iproduto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class BuscarPorcoesService {

  constructor(private http: HttpClient) { }
  devolverPorcoes(): Observable<Iproduto[]> {
    return this.http.get<Iproduto[]>(URL_API_PORCOES);
  }
}
