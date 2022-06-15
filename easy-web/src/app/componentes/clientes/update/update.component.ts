import {Component, OnInit} from '@angular/core';
import {ClienteService} from "../../../service/cliente.service";
import {MatDialogRef} from "@angular/material/dialog";
import {NgForm} from "@angular/forms";
import {Cliente} from "../../../model/cliente";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  cliente:Cliente ={
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    profissao: "",
    renda: "",
    status:"",
    endereco: {
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: ""}
  }

  constructor(private clienteService:ClienteService, public dialogRef: MatDialogRef<UpdateComponent>) {  }

  ngOnInit(): void {
  this.popularFormulario(this.cliente)
  }
  popularFormulario(cliente:any):void{
    cliente.get('nome').setValue(this.cliente.nome)
    cliente.get('telefone').setValue(this.cliente.telefone)
    cliente.get('email').setValue(this.cliente.email)
    cliente.get('profissao').setValue(this.cliente.profissao)
    cliente.get('renda').setValue(this.cliente.renda)
    cliente.get('status').setValue(this.cliente.status)
    cliente.get('rua').setValue(this.cliente.endereco.rua)
    cliente.get('numero').setValue(this.cliente.endereco.numero)
    cliente.get('complemento').setValue(this.cliente.endereco.complemento)
    cliente.get('bairro').setValue(this.cliente.endereco.bairro)
    cliente.get('cidade').setValue(this.cliente.endereco.cidade)
    cliente.get('estado').setValue(this.cliente.endereco.estado)
  }

  onSubmit(Form:NgForm){
    this.clienteService.atualizar(this.cliente).subscribe(()=>this.cliente);

  }
  atualizar():void{
    this.clienteService.atualizar(this.cliente).subscribe((resl:any)=>{
      console.log(resl)
      this.dialogRef.close();
    })
  }
  cancelar():void{
    this.dialogRef.close();
  }
}
