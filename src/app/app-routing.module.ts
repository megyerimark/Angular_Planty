import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminindexComponent } from './Admin/adminindex/adminindex.component';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './Admin/adminregister/adminregister.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './User/index/index.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';

const routes: Routes = [
  {path:"user/login", component:LoginComponent},
  {path:"user/register", component:RegisterComponent},
  {path:"", component:HomeComponent},
  {path:"user/index", component:IndexComponent},
  
  {path:"home", component:HomeComponent},


  {path:"admin/login", component:AdminloginComponent},
  {path:"admin/register", component:AdminregisterComponent},
  {path:"admin/index", component:AdminindexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
