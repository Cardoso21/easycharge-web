import {Component, OnInit} from '@angular/core';
import {Cliente} from "../../../model/cliente";
import {ClienteService} from "../../../service/cliente.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {UpdateComponent} from "../update/update.component";
import {identity} from "rxjs";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  cliente: Cliente [] = [];

  clienteDialog:any


  constructor(public clienteService: ClienteService, private router:Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.buscarTodos()

  }

  buscarTodos():void{
    this.clienteService.buscarTodos().subscribe((resposta) =>{
      this.cliente = resposta;
    })
  }

  create():void{
    this.router.navigate(['/clientes/create'])
  }

  openDialog() {
  const dialogRef = this.dialog.open(UpdateComponent,{
      width:'1900px',
    });
    dialogRef.afterClosed().subscribe(result =>{
    this.clienteDialog.result.form;
    if(result.clicked ==='submit'){
      console.log('Foi fechado')
    }
  })
  }

  delete(cliente:Cliente):void{
    this.clienteService.delete(cliente).subscribe(()=>{
     this.buscarTodos()
    })
  }
  atualizar(cliente:Cliente){
    this.clienteService.listarPorId('cliente.id').subscribe((res)=>{
      this.atualizar(res)
    })
  }
}
