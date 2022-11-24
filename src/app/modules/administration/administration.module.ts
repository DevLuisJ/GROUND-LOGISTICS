import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisableComponent } from './companyVessel/disable/disable.component';
import { CreateOrdenComponent } from './orden/create-orden/create-orden.component';


@NgModule({
  declarations: [
     DisableComponent,
     CreateOrdenComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministrationModule { }
