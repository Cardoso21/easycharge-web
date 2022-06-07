import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cliente} from "../model/cliente";
import {Endereco} from "../model/endereco";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl= 'http://localhost:8080/api/clientes'

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl)
  }
  buscarTodosEnderecos(): Observable<Endereco[]>{
    return this.http.get<Endereco[]>(this.baseUrl);
  }
  create(cliente:Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl,cliente)
  }
  listarPorId(id:string):Observable<Cliente>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url)
  }
  atualizar(cliente:Cliente): Observable<Cliente>{
    const url=`${this.baseUrl}/${cliente.id}`
    return this.http.put<Cliente>(url,cliente)
  }
  delete(id:string): Observable<Cliente>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cliente>(url)
  }
}
