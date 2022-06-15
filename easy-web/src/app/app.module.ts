import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './componentes/templete/header/header.component';
import {NavComponent} from './componentes/templete/nav/nav.component';
import {HomeComponent} from './views/home/home.component';
import {ListarComponent} from './componentes/clientes/listar/listar.component';
import {HttpClientModule} from "@angular/common/http";
import {CreateComponent} from './componentes/clientes/create/create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {UpdateComponent} from './componentes/clientes/update/update.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import { DividasListarComponent } from './componentes/dividas/dividas-listar/dividas-listar.component';
import { MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTableModule} from "@angular/material/table";
import { DividasCreateComponent } from './componentes/dividas/dividas-create/dividas-create.component';
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ListarComponent,
    CreateComponent,
    UpdateComponent,
    DividasListarComponent,
    DividasCreateComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatCardModule,
        MatSnackBarModule,
        MatTableModule,
        MatSelectModule,
        MatDatepickerModule,
        MatDatepickerModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
