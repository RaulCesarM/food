import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { URL_API_BEBIDAS } from '../Constants/Constantes';
import { Iproduto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class BuscarBebidasService{
  constructor(private http: HttpClient) { }

  devolverBebidas(): Observable<Iproduto[]> {
    return this.http.get<Iproduto[]>(URL_API_BEBIDAS);
  }

}