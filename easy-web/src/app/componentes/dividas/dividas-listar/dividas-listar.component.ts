import {Component, OnInit} from '@angular/core';
import {Dividas} from "../../../model/dividas";
import {DividasService} from "../../../service/dividas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dividas-listar',
  templateUrl: './dividas-listar.component.html',
  styleUrls: ['./dividas-listar.component.css']
})
export class DividasListarComponent implements OnInit {

  dividas:Dividas []= []

  constructor(private dividasService:DividasService,private router:Router) { }

  ngOnInit(): void {
  this.listardividas()
  }
  listardividas():void{
    this.dividasService.buscarTodas().subscribe((res)=>{
      console.log(res)
      this.dividas = res;
    })
  }

  novaDivida():void{
    this.router.navigate(['/dividas/create'])
  }

  delete(dividas: Dividas):void {
    this.dividasService.delete(dividas).subscribe(()=>{
      this.listardividas()
    })
  }
}
