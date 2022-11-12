import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { CrearAsistenciaComponent } from './asistencias/crear-asistencia/crear-asistencia.component';
import { EditarAsistenciaComponent } from './asistencias/editar-asistencia/editar-asistencia.component';
import { ListarAsistenciaComponent } from './asistencias/listar-asistencia/listar-asistencia.component';
import { EliminarAsistenciaComponent } from './asistencias/eliminar-asistencia/eliminar-asistencia.component';
import { CrearInformeComponent } from './informe-orden/crear-informe/crear-informe.component';
import { EditarInformeComponent } from './informe-orden/editar-informe/editar-informe.component';
import { ListarInformeComponent } from './informe-orden/listar-informe/listar-informe.component';
import { EliminarInformeComponent } from './informe-orden/eliminar-informe/eliminar-informe.component';


@NgModule({
  declarations: [
    CrearAsistenciaComponent,
    EditarAsistenciaComponent,
    ListarAsistenciaComponent,
    EliminarAsistenciaComponent,
    CrearInformeComponent,
    EditarInformeComponent,
    ListarInformeComponent,
    EliminarInformeComponent
  ],
  imports: [
    CommonModule,
    ReporteRoutingModule
  ]
})
export class ReporteModule { }
