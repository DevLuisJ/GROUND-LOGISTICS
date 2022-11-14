import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './general/login/login.component';
import { RecoveryComponent } from './general/recovery/recovery.component';
import { ChangePasswordComponent } from './general/change-password/change-password.component';
import { CreateComponent } from './users/create/create.component';
import { EditComponent } from './users/edit/edit.component';
import { ListComponent } from './users/list/list.component';
import { DeleteComponent } from './users/delete/delete.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RecoveryComponent,
    ChangePasswordComponent,
    CreateComponent,
    EditComponent,
    ListComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SecurityModule { }
