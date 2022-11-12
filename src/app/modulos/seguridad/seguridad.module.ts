import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './general/login/login.component';
import { RecuperacionComponent } from './general/recuperacion/recuperacion.component';
import { CambiarPasswordComponent } from './general/cambiar-password/cambiar-password.component';
import { CrearUserComponent } from './usuarios/crear-user/crear-user.component';
import { EditarUserComponent } from './usuarios/editar-user/editar-user.component';
import { ListarUserComponent } from './usuarios/listar-user/listar-user.component';
import { EliminarUserComponent } from './usuarios/eliminar-user/eliminar-user.component';
import { CrearRolComponent } from './roles/crear-rol/crear-rol.component';
import { EditarRolComponent } from './roles/editar-rol/editar-rol.component';
import { ListarRolComponent } from './roles/listar-rol/listar-rol.component';
import { EliminaarRolComponent } from './roles/eliminaar-rol/eliminaar-rol.component';


@NgModule({
  declarations: [
    LoginComponent,
    RecuperacionComponent,
    CambiarPasswordComponent,
    CrearUserComponent,
    EditarUserComponent,
    ListarUserComponent,
    EliminarUserComponent,
    CrearRolComponent,
    EditarRolComponent,
    ListarRolComponent,
    EliminaarRolComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
