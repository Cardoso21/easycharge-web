import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './componentes/templete/header/header.component';
import { NavComponent } from './componentes/templete/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ListarComponent } from './componentes/clientes/listar/listar.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateComponent } from './componentes/clientes/create/create.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ListarComponent,
    CreateComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
