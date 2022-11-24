import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { CreateComponent } from './support/create/create.component';
import { EditComponent } from './support/edit/edit.component';
import { ListComponent } from './support/list/list.component';
import { DeleteComponent } from './support/delete/delete.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
