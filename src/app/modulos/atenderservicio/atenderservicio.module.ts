import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtenderservicioRoutingModule } from './atenderservicio-routing.module';
import { AsignardriverComponent } from './asignardriver/asignardriver.component';
import { CargarexpenseComponent } from './atenderserv/cargarexpense/cargarexpense.component';
import { CargarserviceComponent } from './atenderserv/cargarservice/cargarservice.component';
import { StatusComponent } from './atenderserv/status/status.component';


@NgModule({
  declarations: [
    AsignardriverComponent,
    CargarexpenseComponent,
    CargarserviceComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    AtenderservicioRoutingModule
  ]
})
export class AtenderservicioModule { }
