import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoItem } from '../models/tipo-item.model';
const baseUrl = 'http://localhost:8080/api/tipoItems/';
@Injectable({
  providedIn: 'root'
})
export class TipoItemService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<TipoItem[]> {
    return this.http.get<TipoItem[]>(baseUrl);
  }
  get(id: any): Observable<TipoItem> {
    return this.http.get<TipoItem>(`${baseUrl}${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(data: any): Observable<any> {
    return this.http.put(`${baseUrl}${data.id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByDescriptionOrTypeDoc(descricao: any, tipo: any): Observable<TipoItem[]> {
    return this.http.get<TipoItem[]>(`${baseUrl}?descricao=${descricao}&tipo=${tipo}`);
  }
}
