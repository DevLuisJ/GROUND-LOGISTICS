import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrdenComponent } from './orden/create-orden/create-orden.component';
import { ListComponent } from './orden/list/list.component';

const routes: Routes =
[
 {
  path:"createOrden",
  component: CreateOrdenComponent
 },
 {
  path:"list",
  component: ListComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
