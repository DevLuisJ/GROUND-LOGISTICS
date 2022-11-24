import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './extras/pages/contacto/contacto.component';
import { HomeComponent } from './extras/pages/home/home.component';
import { PageNotFoundComponent } from './extras/pages/page-not-found/page-not-found.component';
import { ServiciosComponent } from './extras/pages/servicios/servicios.component';
import { ChangePasswordComponent } from './modules/security/general/change-password/change-password.component';
import { RecoveryComponent } from './modules/security/general/recovery/recovery.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"contacto",
    component:ContactoComponent
  },
  {
    path:"servicios",
    component:ServiciosComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/home"
  },
  {
    path:"security",
    loadChildren: ()=> import("./modules/security/security.module").then (x=>x.SecurityModule)
  },
  {
    path:"administration",
    loadChildren: ()=> import("./modules/administration/administration.module").then(x=>x.AdministrationModule)
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
