import { Component, OnInit } from '@angular/core';
import {Cliente} from "../../../model/cliente";
import {ClienteService} from "../../../service/cliente.service";
import {NgForm, Validators} from "@angular/forms";

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


  constructor(private clinteService:ClienteService) { }

  ngOnInit(): void {
  }
  onSubmit(Form:NgForm){
    this.clinteService.create(this.cliente).subscribe(()=>this.cliente);
  }

}
