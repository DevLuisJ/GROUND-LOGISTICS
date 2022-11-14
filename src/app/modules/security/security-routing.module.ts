import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './general/change-password/change-password.component';
import { LoginComponent } from './general/login/login.component';
import { RecoveryComponent } from './general/recovery/recovery.component';
import { CreateComponent } from './users/create/create.component';

const routes: Routes = [
{
  path:"login",
  component: LoginComponent
},
{
  path:"create",
  component: CreateComponent
},

{
  path:"changePassword",
  component: ChangePasswordComponent
},

{
  path:"recovery",
  component: RecoveryComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
