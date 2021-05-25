import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

//RUTAS
import { APP_ROUTING } from './app.routes'
//COMPONENTES

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ConcursoComponent } from './components/concurso/concurso.component';
import { ControladosComponent } from './components/controlados/controlados.component';
import { RotacionProductosComponent } from './components/rotacion-productos/rotacion-productos.component';
import { ConsolidadosComponent } from './components/consolidados/consolidados.component';
import { KpiComponent } from './components/kpi/kpi.component';
import { EnvioAjustesComponent } from './components/envio-ajustes/envio-ajustes.component';
import { TablaConcursoComponent } from './components/concurso/tabla-concurso/tabla-concurso.component';
import { TablaVentasColaboradorComponent } from './components/concurso/tabla-ventas-colaborador/tabla-ventas-colaborador.component';
import { FormFechaSucursalComponent } from './components/shared/form-fecha-sucursal/form-fecha-sucursal.component';
import { TablaAjustesComponent } from './components/envio-ajustes/tabla-ajustes/tabla-ajustes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ConcursoComponent,
    ControladosComponent,
    RotacionProductosComponent,
    ConsolidadosComponent,
    KpiComponent,
    EnvioAjustesComponent,
    TablaConcursoComponent,
    TablaVentasColaboradorComponent,
    FormFechaSucursalComponent,
    TablaAjustesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    FormFechaSucursalComponent
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
