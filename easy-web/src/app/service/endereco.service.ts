import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Endereco} from "../model/endereco";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  baseUrl= 'http://localhost:8080/api/enderecos'

  constructor(private http: HttpClient) { }

  buscarTodosEnderecos(): Observable<Endereco[]>{
    return this.http.get<Endereco[]>(this.baseUrl);
  }
}
