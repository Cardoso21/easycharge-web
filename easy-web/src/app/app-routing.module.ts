import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {ListarComponent} from "./componentes/clientes/listar/listar.component";
import {CreateComponent} from "./componentes/clientes/create/create.component";
import {DividasListarComponent} from "./componentes/dividas/dividas-listar/dividas-listar.component";
import {DividasCreateComponent} from "./componentes/dividas/dividas-create/dividas-create.component";

const routes: Routes = [{
  path:"",
  component: HomeComponent
},
  {
    path:"clientes",
    component:ListarComponent
  },
  {
    path:"clientes/create",
    component:CreateComponent
  },{
    path:"dividas",
    component:DividasListarComponent
  },
  {
    path:"dividas/create",
    component:DividasCreateComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
