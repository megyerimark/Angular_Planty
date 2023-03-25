import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './Admin/adminregister/adminregister.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';

const routes: Routes = [
  {path:"user/login", component:LoginComponent},
  {path:"user/register", component:RegisterComponent},
  {path:"", component:LoginComponent},


  {path:"admin/login", component:AdminloginComponent},
  {path:"admin/register", component:AdminregisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
