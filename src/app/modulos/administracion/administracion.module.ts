import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearOrdenComponent } from './crear-orden/crear-orden.component';
import { EditarOrdenComponent } from './editar-orden/editar-orden.component';
import { InhabilitarOrdenComponent } from './inhabilitar-orden/inhabilitar-orden.component';
import { ListarOrdenComponent } from './listar-orden/listar-orden.component';
import { CrearServiceComponent } from './service/crear-service/crear-service.component';
import { EditarServiceComponent } from './service/editar-service/editar-service.component';
import { InhabilitarrServiceComponent } from './service/inhabilitarr-service/inhabilitarr-service.component';
import { ListarServiceComponent } from './service/listar-service/listar-service.component';
import { CrearExpenseComponent } from './expense/crear-expense/crear-expense.component';
import { EditarExpenseComponent } from './expense/editar-expense/editar-expense.component';
import { InhabilitarExpenseComponent } from './expense/inhabilitar-expense/inhabilitar-expense.component';
import { ListarExpenseComponent } from './expense/listar-expense/listar-expense.component';
import { CrearTaskComponent } from './task/crear-task/crear-task.component';
import { EditarTaskComponent } from './task/editar-task/editar-task.component';
import { InhabilitarTaskComponent } from './task/inhabilitar-task/inhabilitar-task.component';
import { ListarTaskComponent } from './task/listar-task/listar-task.component';
import { CrearCvComponent } from './CompanyVessel/crear-cv/crear-cv.component';
import { EditarCvComponent } from './CompanyVessel/editar-cv/editar-cv.component';
import { InhabilitarCvComponent } from './CompanyVessel/inhabilitar-cv/inhabilitar-cv.component';
import { ListarCvComponent } from './CompanyVessel/listar-cv/listar-cv.component';
import { EditarRateComponent } from './rates/editar-rate/editar-rate.component';
import { ListarRateComponent } from './rates/listar-rate/listar-rate.component';


@NgModule({
  declarations: [
    CrearOrdenComponent,
    EditarOrdenComponent,
    InhabilitarOrdenComponent,
    ListarOrdenComponent,
    CrearServiceComponent,
    EditarServiceComponent,
    InhabilitarrServiceComponent,
    ListarServiceComponent,
    CrearExpenseComponent,
    EditarExpenseComponent,
    InhabilitarExpenseComponent,
    ListarExpenseComponent,
    CrearTaskComponent,
    EditarTaskComponent,
    InhabilitarTaskComponent,
    ListarTaskComponent,
    CrearCvComponent,
    EditarCvComponent,
    InhabilitarCvComponent,
    ListarCvComponent,
    EditarRateComponent,
    ListarRateComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
