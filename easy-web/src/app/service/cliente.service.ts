import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cliente} from "../model/cliente";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Select} from "../model/select";




@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl= 'http://localhost:8080/api/clientes'

  constructor(private http: HttpClient,private snackbar: MatSnackBar) { }

  showMessage(msg: string): void{
    this.snackbar.open(msg,'X',{
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top"
    })
  }
  buscarTodos(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl)
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
  delete(cliente:Cliente): Observable<Cliente>{
    const url = `${this.baseUrl}/${cliente.id}`
    return this.http.delete<Cliente>(url)
  }
  buscarSelect(): Observable<Select[]> {
    const url= `${this.baseUrl}/select`
    return this.http.get<Select[]>(this.baseUrl)
  }

}
