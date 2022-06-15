import { Component, OnInit } from '@angular/core';
import {Cliente} from "../../../model/cliente";
import {ClienteService} from "../../../service/cliente.service";
import {NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  cliente:Cliente ={
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    profissao: "",
    renda: "",
    status:"",
    endereco: { rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: ""}
  }


  constructor(private clienteService:ClienteService, private router: Router) { }

  ngOnInit(): void {

  }
  onSubmit(Form:NgForm){
    this.clienteService.create(this.cliente).subscribe(()=>this.cliente);

  }

  create():void{
    this.clienteService.create(this.cliente).subscribe((resl)=>{
      this.clienteService.showMessage('Cliente Criado com Sucesso!!')
      this.router.navigate(['/clientes'])
    })
  }
  cancelar():void{
    this.router.navigate(['/clientes'])
  }
}
