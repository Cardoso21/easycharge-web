import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dividas} from "../model/dividas";
import {MatSnackBar} from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class DividasService {

  baseUrl='http://localhost:8080/api/dividas'

  constructor(private http:HttpClient,private snackbar: MatSnackBar) { }

  showMessage(msg: string): void{
    this.snackbar.open(msg,'X',{
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top"
    })
  }

  buscarTodas(): Observable<Dividas[]>{
    console.log(this.baseUrl)
    return this.http.get<Dividas[]>(this.baseUrl)
  }
  buscarPorId(id:string): Observable<Dividas>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Dividas>(url)
  }
  create(dividas:Dividas):Observable<Dividas>{
    return this.http.post<Dividas>(this.baseUrl,dividas)
  }
  atualizar(dividas:Dividas): Observable<Dividas>{
    const url=`${this.baseUrl}/${dividas.id}`
    return this.http.put<Dividas>(url,dividas)
  }

  delete(dividas: Dividas):Observable<Dividas>{
    const url=`${this.baseUrl}/${dividas.id}`
    return this.http.delete<Dividas>(url)
  }
}
