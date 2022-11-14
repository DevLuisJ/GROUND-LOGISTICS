import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { CreateComponent } from './orden/create/create.component';
import { ModifyComponent } from './orden/modify/modify.component';
import { DisableComponent } from './orden/disable/disable.component';
import { ListComponent } from './orden/list/list.component';


@NgModule({
  declarations: [
    CreateComponent,
    ModifyComponent,
    DisableComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
