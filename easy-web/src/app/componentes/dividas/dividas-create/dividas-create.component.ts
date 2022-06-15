import {Component, OnInit} from '@angular/core';
import {DividasService} from "../../../service/dividas.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Dividas} from "../../../model/dividas";
import {ClienteService} from "../../../service/cliente.service";
import {Cliente} from "../../../model/cliente";
import {Selector} from "ngx-bootstrap/modal/models";
import {Select} from "../../../model/select";


@Component({
  selector: 'app-dividas-create',
  templateUrl: './dividas-create.component.html',
  styleUrls: ['./dividas-create.component.css']
})
export class DividasCreateComponent implements OnInit {
    cliente: Selector[]=[]

    listaCliente: Select[] = []

    dividas:Dividas={
    id:'',
    valor:'',
    dataAbertura: '',
    dataQuitacao: '',
    descricao: '',
    cliente:{
        value: '',
        label: ''},

    statusDivida:'',
  }

  constructor(private dividasService:DividasService,private router:Router,private clienteService:ClienteService) { }

  ngOnInit(): void {
        this.buscarCliente()

  }
  onSubmit(Form:NgForm){
    this.dividasService.create(this.dividas).subscribe(()=>this.dividas)
  }

  create():void{
     this.formartCliente()
    this.dividasService.create(this.dividas).subscribe((res)=>{
        console.log(this.dividas)
      this.dividasService.showMessage('Divida Criada com Sucesso!!')
      this.router.navigate(['/dividas'])
    })
  }
  cacelar():void{
    this.router.navigate(['/dividas'])
  }

  buscarCliente():void{
    this.clienteService.buscarSelect().subscribe((res: Select[])=>
        this.listaCliente = [{
            label: ' selecione o cliente',
            value: null
        } as Select].concat(res)

    )
      console.log(this.listaCliente)
  }
  formartCliente():void{
        this.cliente = this.cliente
  }

}
