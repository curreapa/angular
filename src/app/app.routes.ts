import { Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ConcursoComponent } from './components/concurso/concurso.component';
import { ConsolidadosComponent } from './components/consolidados/consolidados.component';
import { ControladosComponent } from './components/controlados/controlados.component';
import { EnvioAjustesComponent } from './components/envio-ajustes/envio-ajustes.component';
import { KpiComponent } from './components/kpi/kpi.component';
import { RotacionProductosComponent } from './components/rotacion-productos/rotacion-productos.component';

const APP_ROUTES: Routes = [
    {path: 'concurso', component: ConcursoComponent},
    {path: 'envio_ajuste', component: EnvioAjustesComponent},
    {path: 'controlados', component: ControladosComponent},
    {path: 'rotacion_productos', component: RotacionProductosComponent},
    {path: 'consolidados', component: ConsolidadosComponent},
    {path: 'KPI', component: KpiComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)