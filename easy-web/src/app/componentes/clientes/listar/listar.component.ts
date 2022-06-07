import {Component, OnInit} from '@angular/core';
import {Cliente} from "../../../model/cliente";
import {ClienteService} from "../../../service/cliente.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  cliente: Cliente [] = [{
    id: "",
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    profissao: "",
    renda: "",
    status:"",
    endereco: ""
  }];


  constructor(public clienteService: ClienteService, private router:Router) { }

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


}
